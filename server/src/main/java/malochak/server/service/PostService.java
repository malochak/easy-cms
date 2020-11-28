package malochak.server.service;

import lombok.AllArgsConstructor;
import malochak.server.domain.Post;
import malochak.server.repository.PostRepository;
import org.springframework.stereotype.Service;

import java.util.Date;

@AllArgsConstructor
@Service
public class PostService {

    private final PostRepository postRepository;

    // todo - implement rest of crud operations on repo

    public Post createPost(Post requestPost) {
        Long id = requestPost.getId();
        Post post = requestPost;
        if (id != null) {
             post = postRepository.findById(requestPost.getId()).map( foundPost -> {
                foundPost.setTitle(requestPost.getTitle());
                foundPost.setAuthor(requestPost.getAuthor());
                foundPost.setContent(requestPost.getContent());
                foundPost.setUpdateDate(new Date());
                return foundPost;
            }).orElse(requestPost);
        }


        return postRepository.save(post);
    }

}
