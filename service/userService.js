const { User } = require("../modal/Userschema");

 const userServices = async (userName) => {
  const userdocument = await User.findOne({ userName: userName });
  if (userdocument) {
    return userdocument;
  } else {
    return null;
  }
};

module.exports = { userServices };
