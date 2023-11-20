// import { useNavigate } from "react-router-dom";
// import supabase from "./Supabase";
// import { Auth } from "@supabase/auth-ui-react";

// export default function User() {
//   const navigate = useNavigate();
//   supabase.auth.onAuthStateChange(async (event) => {
//     if (event !== "SIGNED_OUT") {
//       navigate("/dashboard");
//     } else {
//       navigate("/");
//     }
//   });
//   return (
//     <div>
//       <Auth />
//     </div>
//   );
// }
