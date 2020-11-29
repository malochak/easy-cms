package malochak.server.service;

import lombok.AllArgsConstructor;
import malochak.server.domain.Post;
import malochak.server.repository.PostRepository;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.Optional;

@AllArgsConstructor
@Service
public class PostService {

    private final PostRepository postRepository;

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

    public Iterable<Post> getAllPosts() {
        return postRepository.findAll();
    }

    public Optional<Post> getPostById(Long id) {
        return postRepository.findById(id);
    }

    public boolean deletePostById(Long id) {
        Optional<Post> post = postRepository.findById(id);

        return post.map(value -> {
            postRepository.delete(value);
            return true;
        }).orElse(false);
    }
}
