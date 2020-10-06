package malochak.server.controller;

import malochak.server.domain.Post;
import malochak.server.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/post")
public class PostController {

    @Autowired
    PostRepository postRepository;


    // Todo validate request
    @PostMapping()
    public ResponseEntity<Post> newPost(@Valid @RequestBody Post post) {
        postRepository.save(post);
        return new ResponseEntity<>(post, HttpStatus.CREATED);
    }

    @GetMapping()
    public ResponseEntity<Iterable<Post>> getPosts() {
        return new ResponseEntity<>(postRepository.findAll(), HttpStatus.OK);
    }
}
