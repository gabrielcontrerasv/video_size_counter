import axios from "axios";
import { config } from "./config.js";

const accessToken = config.ACCESS_TOKEN;

const project_id = config.PROJECT_ID;
const user_id = config.USER_ID;

async function getFolderWeight(project_id) {
  try {
    const response = await axios.get(
      `https://api.vimeo.com/users/${user_id}/projects/${project_id}/videos`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    const data = response.data;
    const videos = data.data.flatMap((element) =>
      element.files.map((video) => video.size)
    );
    const resultado = videos.reduce((a, b) => a + b, 0);

    const kb = Math.round(resultado / 1024);
    const mb = Math.round(resultado / 1048576);
    const gb = Math.round(resultado / 1073741824);

    console.log(resultado + " bytes");
    console.log(kb + " kb");
    console.log(mb + " mb");
    console.log(gb + " gb");
  } catch (error) {
    console.error("Error al obtener el peso de la carpeta:", error.message);
  }
}

getFolderWeight(project_id);
