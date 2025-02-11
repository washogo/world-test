import { Box, IconButton } from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { GrLike } from "react-icons/gr";

type LikeProps = {
  postId: number;
};

const createLikes = async (userId: number, postId: number) => {
  const res = await fetch(`https://world-map-sns.vercel.app/api/likes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userId, postId }),
  });

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(`Error ${res.status}: ${errorData.error}`);
  }

  return res.json();
};

const deleteLikes = async (userId: number, postId: number) => {
  try {
    const response = await fetch(`https://world-map-sns.vercel.app/api/likes`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId, postId }),
    });
    if (response.ok) {
      console.log("いいねを削除しました");
    }
  } catch (error) {
    console.error("いいねが削除できませんでした", error);
  }
};

const Likes = ({ postId }: { postId: number }) => {
  const [liked, setLiked] = useState(false);
  const { data: session } = useSession();
  // console.log("セッション情報：", session);

  const handleLike = async () => {
    if (!session?.user?.id) {
      console.error("ログインしていません");
      return;
    }
    const userId = Number(session.user.id);
    try {
      if (liked) {
        await deleteLikes(userId, postId);
        //いいねを削除した後に更新
        setLiked(false);
      } else {
        await createLikes(userId, postId);
        //いいねを追加した後に更新
        setLiked(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const getLikeData = async (postId: number) => {
      if (!session?.user?.id) return;
      const userId = Number(session.user.id);

      try {
        const res = await fetch(
          `https://world-map-sns.vercel.app/api/likes?userId=${userId}&${postId}`,
          { cache: "no-store" }
        );
        if (!res.ok) throw new Error("いいね状態の取得失敗");

        const data = await res.json();
        setLiked(data.liked);
      } catch (error) {
        console.error("いいねの取得失敗", error);
      }
    };
    getLikeData(postId);
  }, [session?.user?.id, postId]);

  return (
    <Box>
      <IconButton
        aria-label="いいね"
        icon={<GrLike />}
        onClick={handleLike}
        colorScheme={liked ? "blue" : "gray"}
      />
    </Box>
  );
};

export default Likes;
