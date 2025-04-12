// import profile from "../assets/profile.jpg";
// import "./header.css";
// import linkedin from "../assets/linkedin.png";
// import leetcode from "../assets/leetcode.png";
// import github from "../assets/github.png"
// import gmail from "../assets/gmail.png"
// import instagram from "../assets/instagram.png"

// const Header = (): React.ReactNode => {
//   return (
//     <>
//       <div className="header-root">
//         <img src={profile}></img>
//         <div>
//           <div className="my-name">
//             <p>
//               <b>Unnati Umesh Kulkarni(Fullstack Developer)</b>
//             </p>
//           </div>
//           <div className="header-button">
//           <button>Developer</button>
//             <button>Creator</button>
//           </div>
//           <div className="social-media">
//             <ul className="social-icons">
//               <li style={{ display: "flex", alignItems: "center", gap: "8px",objectFit: "contain" }}>
//               <a href="https://www.linkedin.com/in/unnati-kulkarni-ba9355241/">
//               <img
//                   src={linkedin}
//                   alt="LinkedIn"
//                   style={{ width: "20px", height: "20px" }}
//                 />
//                 LinkedIn
//               </a>
//               </li>
//               <li style={{ display: "flex", alignItems: "center", gap: "8px" }}>
//                <a href="https://leetcode.com/u/user1524Iv/">
//                <img
//                   src={leetcode}
//                   alt="leetcode"
//                   style={{ width: "20px", height: "20px" }}
//                 />
//                 Leetcode
//                </a>
//               </li>
//               <li style={{ display: "flex", alignItems: "center", gap: "8px" }}>
//                 <a href="https://github.com/UnnatiUmesh">
//                 <img
//                   src={github}
//                   alt="github"
//                   style={{ width: "20px", height: "20px" }}
//                 />
//                 Github
//                 </a>
//               </li>
//               <li style={{ display: "flex", alignItems: "center", gap: "8px" }}>
//                <a href="https://www.instagram.com/unnati_umesh_kulkarni/?utm_source=qr&igsh=MWt5bTRwZWZkdmZlbw%3D%3D">
//                <img
//                   src={instagram}
//                   alt="instagram"
//                   style={{ width: "20px", height: "20px" }}
//                 />
//                 Instagram
//                </a>
//               </li>
//               <li style={{ display: "flex", alignItems: "center", gap: "8px" }}>
//                 <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox">
//                 <img
//                   src={gmail}
//                   alt="gmail"
//                   style={{ width: "20px", height: "20px" }}
//                 />
//                 Gmail
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
// export default Header;

import profile from "../assets/profile.jpg";
import "./header.css";
import linkedin from "../assets/linkedin.png";
import leetcode from "../assets/leetcode.png";
import github from "../assets/github.png";
import gmail from "../assets/gmail.png";
import instagram from "../assets/instagram.png";

const Header = (): React.ReactNode => {
  return (
    <div className="center-wrapper">
      <div className="header-root">
        <img src={profile} alt="Profile" />
        <div>
          <div className="my-name">
            <p>
              <b>Unnati Umesh Kulkarni (Fullstack Developer)</b>
            </p>
          </div>
          <div className="header-button">
            <button>Developer</button>
            <button>Creator</button>
          </div>
          <div className="social-media">
            <ul className="social-icons">
              <li>
                <a href="https://www.linkedin.com/in/unnati-kulkarni-ba9355241/">
                  <img src={linkedin} alt="LinkedIn" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://leetcode.com/u/user1524Iv/">
                  <img src={leetcode} alt="Leetcode" />
                  Leetcode
                </a>
              </li>
              <li>
                <a href="https://github.com/UnnatiUmesh">
                  <img src={github} alt="GitHub" />
                  Github
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/unnati_umesh_kulkarni/">
                  <img src={instagram} alt="Instagram" />
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox">
                  <img src={gmail} alt="Gmail" />
                  Gmail
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

