package malochak.server.domain;

import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import java.util.Date;

@Entity
@Data
@EqualsAndHashCode
public class Post {

    @Id
    private Long id;

    private String title;
    private String author;
    @Column(columnDefinition="TEXT")
    private String content;

    private Date creationDate;
    private Date updateDate;

}
