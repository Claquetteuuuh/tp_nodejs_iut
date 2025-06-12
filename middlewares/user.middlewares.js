export const validateUserData = (req, res, next) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({
      status: 'fail',
      message: "Veuillez fournir le nom, l'email et le mot de passe",
    });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      status: 'fail',
      message: 'Veuillez fournir un email valide',
    });
  }

  if (password.length < 8) {
    return res.status(400).json({
      status: 'fail',
      message: 'Le mot de passe doit contenir au moins 8 caractères',
    });
  }

  next();
};
