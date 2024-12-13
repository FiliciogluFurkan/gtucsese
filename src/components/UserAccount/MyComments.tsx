import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import frieren from "/src/assets/images/MyComments/frieren.png";
import stars from "/src/assets/images/MyComments/stars.png";
import pencil from "/src/assets/images/MyComments/pencil.png";
import arrow_down from "/src/assets/images/MyComments/arrow-down.png";

// Yorumların türünü tanımlıyoruz
type Comment = {
  id: number;
  name: string;
  date: string;
  rating: number;
  text: string;
};

const MyComments = () => {
  const [comments, setComments] = useState<Comment[]>([]); // Yorumlar için state
  const [isExpanded, setIsExpanded] = useState(false); // Genişleme durumu
  const [editingCommentId, setEditingCommentId] = useState<number | null>(null); // Düzenlenen yorum ID'si
  const [updatedText, setUpdatedText] = useState<string>(""); // Düzenlenen yorumun yeni metni

  useEffect(() => {
    // Simüle edilmiş backend çağrısı
    const fetchComments = async () => {
      const mockApiResponse: Comment[] = [
        { id: 1, name: "DARARA Halısaha", date: "08.09.2024", rating: 4.5, text: "Buraya sakın gelmeyin, asla tavsiye etmiyorum." },
        { id: 2, name: "DARARA Halısaha", date: "07.09.2024", rating: 4.0, text: "Hizmet güzel ama eksiklikler vardı." },
        { id: 3, name: "DARARA Halısaha", date: "06.09.2024", rating: 3.5, text: "Fena değil, geliştirilmesi gerek." },
        { id: 4, name: "DARARA Halısaha", date: "05.09.2024", rating: 5.0, text: "Mükemmel bir deneyimdi!" },
        { id: 5, name: "DARARA Halısaha", date: "04.09.2024", rating: 2.0, text: "Kesinlikle tavsiye etmiyorum!" },
        { id: 6, name: "DARARA Halısaha", date: "03.09.2024", rating: 4.8, text: "Gayet başarılı bir yer." },
      ];
      setComments(mockApiResponse); // Yorumları state'e kaydet
    };

    fetchComments();
  }, []);

  const handleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  const handleEditClick = (id: number, currentText: string) => {
    setEditingCommentId(id);
    setUpdatedText(currentText); // Mevcut metni düzenleme alanına koy
  };

  const handleUpdateSubmit = () => {
    setComments((prevComments) =>
      prevComments.map((comment) =>
        comment.id === editingCommentId
          ? { ...comment, text: updatedText } // Yorum metnini güncelle
          : comment
      )
    );
    setEditingCommentId(null); // Düzenleme modunu kapat
    setUpdatedText(""); // Metni sıfırla
  };

  const displayedComments = isExpanded ? comments : comments.slice(0, 3);

  return (
    <div>
      <Box sx={{ display: "flex", flexDirection: "column", width: "100vw" }}>
        {displayedComments.map((comment) => (
          <Box
            key={comment.id}
            sx={{
              display: "flex",
              flexDirection: "row",
              marginLeft: "8rem",
              marginTop: "4rem",
              width: "70vw",
            }}
          >
            <Box>
              <img
                src={frieren}
                alt="profile"
                style={{ width: "42px", height: "42px", objectFit: "cover" }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                paddingLeft: "1.5rem",
              }}
            >
              <Box
                sx={{
                  fontWeight: "400",
                  fontFamily: "Poppins",
                  fontSize: "1rem",
                  color: "#000000",
                }}
              >
                {comment.name}
              </Box>
              <Box
                sx={{
                  fontWeight: "400",
                  fontFamily: "Poppins",
                  fontSize: "0.8rem",
                  color: "#B1ABAB",
                }}
              >
                {comment.date}
              </Box>
              {editingCommentId === comment.id ? (
                <Box sx={{ paddingTop: "1rem", width: "55vw" }}>
                  <textarea
                    value={updatedText}
                    onChange={(e) => setUpdatedText(e.target.value)}
                    style={{
                      width: "100%",
                      height: "50px",
                      fontSize: "1rem",
                      fontFamily: "Poppins",
                    }}
                  />
                  <button
                    onClick={handleUpdateSubmit}
                    style={{
                      marginTop: "0.5rem",
                      padding: "0.3rem 1rem",
                      backgroundColor: "#464255",
                      color: "#fff",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    Güncelle
                  </button>
                </Box>
              ) : (
                <Box
                  sx={{
                    fontWeight: "300",
                    fontFamily: "Poppins",
                    fontSize: "1rem",
                    color: "#B1ABAB",
                    paddingTop: "1rem",
                    width: "55vw",
                  }}
                >
                  {comment.text}
                </Box>
              )}
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <Box sx={{ paddingTop: "1rem" }}>
                  <img
                    src={stars}
                    alt="rating"
                    style={{
                      width: "auto",
                      height: "auto",
                      objectFit: "cover",
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    fontWeight: "500",
                    fontFamily: "Barlow",
                    fontSize: "1.1rem",
                    color: "#464255",
                    paddingLeft: "1rem",
                    paddingTop: "0.7rem",
                  }}
                >
                  {comment.rating}
                </Box>
              </Box>
            </Box>
            <Box
              sx={{ paddingLeft: "2.5rem", cursor: "pointer" }}
              onClick={() => handleEditClick(comment.id, comment.text)} // Düzenleme başlatma
            >
              <img
                src={pencil}
                alt="edit"
                style={{
                  width: "auto",
                  height: "auto",
                  objectFit: "cover",
                }}
              />
            </Box>
          </Box>
        ))}

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            marginTop: "2rem",
            cursor: "pointer",
          }}
          onClick={handleExpand}
        >
          <Box
            sx={{
              fontFamily: "Poppins",
              fontWeight: "400",
              fontSize: "1rem",
              color: "#000000",
            }}
          >
            {isExpanded ? "Gizle" : "Tümünü Görüntüle"}
          </Box>
          <Box sx={{ paddingLeft: "1rem", marginTop: "0.3rem" }}>
            <img
              src={arrow_down}
              alt="arrow"
              style={{
                width: "auto",
                height: "auto",
                objectFit: "cover",
              }}
            />
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default MyComments;
