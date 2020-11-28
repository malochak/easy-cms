package malochak.server.controller;

import lombok.AllArgsConstructor;
import malochak.server.domain.Post;
import malochak.server.repository.PostRepository;
import malochak.server.service.PostService;
import malochak.server.service.RequestValidationService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Optional;

@RestController
@RequestMapping("/api/post")
@CrossOrigin
@AllArgsConstructor
public class PostController {

    private final PostRepository postRepository;
    private final PostService postService;
    private final RequestValidationService validationService;

    @PostMapping()
    public ResponseEntity<?> newPost(@Valid @RequestBody Post post, BindingResult result) {
        ResponseEntity<?> errorResponse = validationService.validateRequest(result);

        if (errorResponse != null) {
            return errorResponse;
        }

        return new ResponseEntity<>(postService.createPost(post), HttpStatus.CREATED);
    }

    @GetMapping()
    public ResponseEntity<Iterable<Post>> getPosts() {
        return new ResponseEntity<>(postRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<Post> getPost(@PathVariable Long id) {
        Optional<Post> post = postRepository.findById(id);

        return post.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(null, HttpStatus.NOT_FOUND));

    }
}
