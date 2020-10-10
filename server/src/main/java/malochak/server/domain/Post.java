package malochak.server.domain;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.util.Date;

@Entity
@Data
@EqualsAndHashCode
public class Post {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @NotBlank(message = "The title of post cannot be blank.")
    private String title;

    @NotBlank(message = "The author of post must be specified")
    private String author;

    @Column(columnDefinition="TEXT")
    @NotBlank(message = "The post text cannot be blank.")
    private String content;

    @JsonFormat(pattern = "dd-MM-yyyy")
    private Date creationDate;

    @JsonFormat(pattern = "dd-MM-yyyy")
    private Date updateDate;

    @PrePersist
    public void onCreate() {
        this.creationDate = new Date();
    }

    @PreUpdate
    public void onUpdate() {
        this.updateDate = new Date();
    }
}
