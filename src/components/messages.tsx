import React from 'react';
import {fourChanAPI} from "../service/FourChanService";
import {Card} from "react-bootstrap";

const Messages = () => {
  const {data, error, isLoading} = fourChanAPI.useGetPostsQuery(null)
  return (
    <Card.Body style={{width: '100%', flexWrap: 'wrap', display: 'flex', flexDirection: 'row'}}>
      {isLoading
        ? <Card.Title style={{textAlign: 'center'}}>Загрузка...</Card.Title>
        : error
          ? <Card.Title style={{textAlign: 'center'}}>Неожиданная ошибка :(</Card.Title>
          : data && data.length
            ? data.map((post) =>
              <Card key={post.id} style={{width: '20%', height: '20%'}}>
                <Card.Header><Card.Title>Автор: {post.author ? post.author : 'Аноним'}</Card.Title></Card.Header>
                {post.imagePath
                  && <Card.Body>
                      <img
                        style={{width: '100%', height: '100%'}}
                        src={`http://localhost:8000/uploads/images/${post.imagePath}`}
                        alt='Картинка поста'
                      />
                    </Card.Body>}
                <Card.Footer>{post.message}</Card.Footer>
              </Card>
            )
            : <Card.Title style={{textAlign: 'center'}}>Постов, пока, нет</Card.Title>
      }
    </Card.Body>
  );
};

export default Messages;