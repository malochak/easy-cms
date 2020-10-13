package malochak.server.controller;

import malochak.server.domain.Post;
import malochak.server.repository.PostRepository;
import malochak.server.service.RequestValidationService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/post")
public class PostController {

    final PostRepository postRepository;
    final RequestValidationService validationService;

    public PostController(PostRepository postRepository, RequestValidationService validationService) {
        this.postRepository = postRepository;
        this.validationService = validationService;
    }

    @PostMapping()
    public ResponseEntity<?> newPost(@Valid @RequestBody Post post, BindingResult result) {
        ResponseEntity<?> errorResponse = validationService.validateRequest(result);

        if (errorResponse != null) {
            return errorResponse;
        }

        postRepository.save(post);
        return new ResponseEntity<>(post, HttpStatus.CREATED);
    }

    @GetMapping()
    public ResponseEntity<Iterable<Post>> getPosts() {
        return new ResponseEntity<>(postRepository.findAll(), HttpStatus.OK);
    }
}
