import axios from "axios";

export const get_user_info = async (user) => {
  if (!user) {
    console.log('user not logged in');
    return null;
  }

  await axios({
    method: 'get',
    url: `/api/users/${user._id}`,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${user.token}`,
    }
  })
  .then((res) => {
    console.log('RES DATA:', res.data);
  })
};
