import React from "react";

export default function Information() {
  return (
    <div className="information-container">
      <div className="images-container">
        <img
          className="left-image"
          src="https://lawnuk.com/wp-content/uploads/2014/01/Green%20Grass.jpg"
          alt="murawa"
        />
        <img
          className="mid-image"
          src="https://media.istockphoto.com/id/903394256/pl/zdj%C4%99cie/pi%C5%82ka-no%C5%BCna-cel-post-odosobniony.jpg?s=612x612&w=0&k=20&c=uKfzt1adHk5ZniswJH78hTv3k46pKh-aGt3_IGC9IoM="
          alt=""
        />
        <img
          className="right-image"
          src="https://lawnuk.com/wp-content/uploads/2014/01/Green%20Grass.jpg"
          alt=""
        />
      </div>
      <div className="offert-information-container">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu
          porta magna. Mauris ut justo egestas, pharetra est ut, blandit ante.
          Donec auctor ipsum lacus, quis commodo ex volutpat fringilla. Donec
          non augue metus. Nulla aliquet leo porta nulla sollicitudin, et
          
           
        </p>
      </div>
      <footer>
        <p>&copy; TWOJA FIRMA</p>
        <a href="https://www.facebook.com">Facebook</a>
        <a href="https://twitter.com">Twitter</a>
        <a href="mailto:kontakt@twojafirma.com">kontakt@twojafirma.com</a>
      </footer>
    </div>
  );
}
