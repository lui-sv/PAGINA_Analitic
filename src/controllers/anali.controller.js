import TipificationAssignment from "../models/tipificationAssignment.model.js";
import UsersTeams from "../models/usersTeams.model.js";
import Teams from "../models/teams.model.js";
import Subtipifications from "../models/subtipifications.model.js";
import Tipifications from "../models/tipifications.model.js";

export const getTipificationAssignments = async (req, res) => {
  try {
    // Extraer el usuario del request, podría ser del token o de un parámetro
    const { user } = req.query;

    if (!user) {
      return res.status(400).json({ message: "User is required" });
    }

    // Paso 1: Obtener TipificationAssignments para el usuario
    const tipificationAssignments = await TipificationAssignment.find({ user });

    if (!tipificationAssignments.length) {
      return res.status(404).json({ message: "No tipification assignments found for this user" });
    }

    // Paso 2: Obtener el TeamId del usuario en la colección UsersTeams
    const userTeam = await UsersTeams.findOne({ user });
    if (!userTeam) {
      return res.status(404).json({ message: "User is not associated with any team" });
    }

    const teamId = userTeam.TeamId;

    // Paso 3: Obtener el nombre del Team en la colección Teams
    const team = await Teams.findById(teamId);
    if (!team) {
      return res.status(404).json({ message: "Team not found" });
    }

    const teamName = team.name;

    // Paso 4: Procesar Tipifications y Subtipifications
    const results = await Promise.all(
      tipificationAssignments.map(async (assignment) => {
        // Obtener Subtipification
        const subtipification = await Subtipifications.findById(assignment.tipificacion);
        if (!subtipification) {
          throw new Error("Subtipification not found");
        }

        // Obtener Tipification
        const tipification = await Tipifications.findById(subtipification.tipificationID);
        if (!tipification) {
          throw new Error("Tipification not found");
        }

        return {
          assignmentId: assignment._id,
          user: assignment.user,
          teamName,
          subtipification: subtipification.name, // Nombre de la subtipificación
          categoryTip: tipification.categorytip, // Categoría de la tipificación
        };
      })
    );

    // Respuesta final
    res.json(results);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
