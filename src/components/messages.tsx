import React from 'react';
import {fourChanAPI} from "../service/FourChanService";

const Messages = () => {
  const {data, error, isLoading} = fourChanAPI.useGetPostsQuery(null)
  return (
    <div>
      {isLoading
        ? <div>Загрузка...</div>
        : error
          ? <div>Неожиданная ошибка :(</div>
          : data && data.map(post =>
              <div key={post.id}>
                {post.author && <div>{post.author}</div>}
                <div>{post.message}</div>
                {post.imagePath && <img src={`http://localhost:8000/uploads/images/${post.imagePath}`} alt='Картинка поста' />}
              </div>
            )
      }
    </div>
  );
};

export default Messages;