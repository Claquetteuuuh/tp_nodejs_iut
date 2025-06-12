export const addTourmiddleware = (req, res, next) => {
    const { name, duration, difficulty, description, maxGroupSize } = req.body;
  
    if (!name || !duration || !difficulty || !description || !maxGroupSize) {
      res.status(400).json({ error: "Vous n'avez pas mis toutes les valeurs" });
      return;
    }
    const durationInt = Number.parseInt(duration);
    const maxGroupSizeInt = Number.parseInt(maxGroupSize);
  
    if (isNaN(durationInt) || isNaN(maxGroupSizeInt)) {
      res
        .status(400)
        .json({ error: 'La duration ou MaxGroupSize doit être un INT' });
      return;
    }
    next();
  };
  