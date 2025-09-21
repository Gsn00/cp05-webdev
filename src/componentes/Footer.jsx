import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="w-full py-4 bg-[#343434] text-white">
      <div className="container mx-auto text-center flex flex-col gap-5 items-center">
        <h1 className="text-2xl font-bold text-orange-500">GourmetOn</h1>
        <div>
          <a
            href=""
            className="mx-2 w-10 aspect-square bg-[#242424] p-2 rounded-full inline-block"
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a
            href=""
            className="mx-2 w-10 aspect-square bg-[#242424] p-2 rounded-full inline-block"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href=""
            className="mx-2 w-10 aspect-square bg-[#242424] p-2 rounded-full inline-block"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            href=""
            className="mx-2 w-10 aspect-square bg-[#242424] p-2 rounded-full inline-block"
          >
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </div>
        <div className="flex flex-wrap justify-center gap-4 mt-4 ">
          <a href="" className="text-sm">
            Sobre Nós
          </a>
          <a href="" className="text-sm">
            Restaurante
          </a>
          <a href="" className="text-sm">
            Trabalhe conosco
          </a>
          <a href="" className="text-sm">
            Termos de Uso
          </a>
          <a href="" className="text-sm">
            Privacidade
          </a>
          <a href="" className="text-sm">
            Ajuda
          </a>
        </div>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} FoodApp. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
