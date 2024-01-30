
import { getCookie } from "../Components/LoginPage/LoginHelper";

const API = 'http://localhost:5000/auth';
const accessToken = getCookie('user');

export const blockUser = (email) => {
  const response = fetch(`${API}/block-user`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`,
    },
    body: JSON.stringify({ email }),
  });

  if (response.ok)



  console.log(`Blocked user with email: ${email}`);
};
