package com.example.socrates;

import lombok.AccessLevel;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;

import javax.validation.constraints.NotNull;
import javax.persistence.*;
import java.io.Serializable;

@Data
@Entity
public class Question implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private Long id;

    @Column(name = "type")
    @NotNull
    private String type;
    @Column(name = "question")
    @NotNull
    private String question;
    @Column(name = "keyword")
    @NotNull
    private String keyword;
    @Column(name = "answer")
    @NotNull
    private String answer;
}
