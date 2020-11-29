package malochak.server.controller;

import lombok.AllArgsConstructor;
import malochak.server.domain.Post;
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
@CrossOrigin(exposedHeaders="Access-Control-Allow-Origin")
@AllArgsConstructor
public class PostController {

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
        return new ResponseEntity<>(postService.getAllPosts(), HttpStatus.OK);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<Post> getPostById(@PathVariable Long id) {
        Optional<Post> post = postService.getPostById(id);

        return post.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(null, HttpStatus.NOT_FOUND));
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<?> deletePostById(@PathVariable Long id) {
        return postService.deletePostById(id) ?
                ResponseEntity.ok().build() : ResponseEntity.notFound().build();
    }
}
