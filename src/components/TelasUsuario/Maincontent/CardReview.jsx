import React from 'react';
import axios from 'axios'; // Importe o axios

function CardReview(props) {
console.log(props)
  // Função para excluir a avaliação
  const deleteReview = async (id) => {
    console.log(id + "IDDDDDDDDDDDDDDDDDDD")
    try {

      const token = sessionStorage.getItem('authToken');

      await axios.delete(`http://18.232.132.229:8080/avaliacoes/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });      // Aqui você pode adicionar a lógica para atualizar a UI após a exclusão bem-sucedida
      alert("Avaliação excluída com sucesso!");
      window.location.reload();
    } catch (error) {
      console.error("Erro ao excluir a avaliação:", error);
      alert("Não foi possível excluir a avaliação.");
    }
  };
  return (
    <div className="modal">
      <div className="modalHeader">


        <div className="modalHeaderText">
          {props.localName}
          <button onClick={props.closeModal}>
            x
          </button>
        </div>
      </div>



      <div className="modalCards">
        {props.reviews.map((review) => (
          <div className="modalCard" key={review.id}> {/* Certifique-se de que `review` tenha um `id` */}
            <div className="modalCardTop">
              <div className="modalCardText">
                <h4>{review.title}</h4>
                <p>{review.desc}</p>
              </div>

              <div className="modalCardButton">
                <div className="modalCardButtonAndTrash">
                  <button o>Editar</button>
                  <button className="modalCardButtonTrash" onClick={() => deleteReview(review.id)}>
                    <svg
                      width="26"
                      height="26"
                      viewBox="0 0 26 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21.4844 6.25H17.2188V5.23438C17.2188 4.64178 16.9833 4.07346 16.5643 3.65443C16.1453 3.23541 15.577 3 14.9844 3H10.1094C9.51678 3 8.94846 3.23541 8.52943 3.65443C8.11041 4.07346 7.875 4.64178 7.875 5.23438V6.25H3.60938C3.44776 6.25 3.29276 6.3142 3.17848 6.42848C3.0642 6.54276 3 6.69776 3 6.85938C3 7.02099 3.0642 7.17599 3.17848 7.29027C3.29276 7.40455 3.44776 7.46875 3.60938 7.46875H4.625V22.2969C4.625 22.674 4.7748 23.0356 5.04146 23.3023C5.30811 23.5689 5.66977 23.7188 6.04688 23.7188H19.0469C19.424 23.7188 19.7856 23.5689 20.0523 23.3023C20.3189 23.0356 20.4688 22.674 20.4688 22.2969V7.46875H21.4844C21.646 7.46875 21.801 7.40455 21.9153 7.29027C22.0295 7.17599 22.0938 7.02099 22.0938 6.85938C22.0938 6.69776 22.0295 6.54276 21.9153 6.42848C21.801 6.3142 21.646 6.25 21.4844 6.25ZM9.09375 5.23438C9.09375 4.96501 9.20075 4.70669 9.39122 4.51622C9.58169 4.32575 9.84001 4.21875 10.1094 4.21875H14.9844C15.2537 4.21875 15.5121 4.32575 15.7025 4.51622C15.893 4.70669 16 4.96501 16 5.23438V6.25H9.09375V5.23438ZM19.25 22.2969C19.25 22.3507 19.2286 22.4024 19.1905 22.4405C19.1524 22.4786 19.1007 22.5 19.0469 22.5H6.04688C5.993 22.5 5.94134 22.4786 5.90324 22.4405C5.86515 22.4024 5.84375 22.3507 5.84375 22.2969V7.46875H19.25V22.2969ZM10.7188 11.7344V18.2344C10.7188 18.396 10.6545 18.551 10.5403 18.6653C10.426 18.7795 10.271 18.8438 10.1094 18.8438C9.94776 18.8438 9.79276 18.7795 9.67848 18.6653C9.5642 18.551 9.5 18.396 9.5 18.2344V11.7344C9.5 11.5728 9.5642 11.4178 9.67848 11.3035C9.79276 11.1892 9.94776 11.125 10.1094 11.125C10.271 11.125 10.426 11.1892 10.5403 11.3035C10.6545 11.4178 10.7188 11.5728 10.7188 11.7344ZM15.5938 11.7344V18.2344C15.5938 18.396 15.5295 18.551 15.4153 18.6653C15.301 18.7795 15.146 18.8438 14.9844 18.8438C14.8228 18.8438 14.6678 18.7795 14.5535 18.6653C14.4392 18.551 14.375 18.396 14.375 18.2344V11.7344C14.375 11.5728 14.4392 11.4178 14.5535 11.3035C14.6678 11.1892 14.8228 11.125 14.9844 11.125C15.146 11.125 15.301 11.1892 15.4153 11.3035C15.5295 11.4178 15.5938 11.5728 15.5938 11.7344Z"
                        fill="#1E1E1E"
                      />
                    </svg>
                  </button>
                </div>

                {!review?.resposta?.resposta && <span>{review.date}</span>}
              </div>
            </div>
            {review?.resposta?.resposta && (
              <div className="modalCardResponseAndData">
                <div className="modalCardResponseAndDataText">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.26 30L16 29L12 22H6C5.46957 22 4.96086 21.7893 4.58579 21.4142C4.21071 21.0391 4 20.5304 4 20V8C4 7.46957 4.21071 6.96086 4.58579 6.58579C4.96086 6.21071 5.46957 6 6 6H26C26.5304 6 27.0391 6.21071 27.4142 6.58579C27.7893 6.96086 28 7.46957 28 8V20C28 20.5304 27.7893 21.0391 27.4142 21.4142C27.0391 21.7893 26.5304 22 26 22H17V24H26C27.0609 24 28.0783 23.5786 28.8284 22.8284C29.5786 22.0783 30 21.0609 30 20V8C30 6.93913 29.5786 5.92172 28.8284 5.17157C28.0783 4.42143 27.0609 4 26 4H6C4.93913 4 3.92172 4.42143 3.17157 5.17157C2.42143 5.92172 2 6.93913 2 8V20C2 21.0609 2.42143 22.0783 3.17157 22.8284C3.92172 23.5786 4.93913 24 6 24H10.84L14.26 30Z"
                      fill="#CE1A1A"
                    />
                    <path
                      d="M24 10H8V12H24V10ZM24 16H14V18H24V16Z"
                      fill="#CE1A1A"
                    />
                  </svg>

                  <p>{review?.resposta?.resposta}</p>
                </div>

                <span>{review.date}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardReview;
