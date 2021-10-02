package com.example.socrates.data;
import com.example.socrates.Question;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface QuestionRepository extends CrudRepository<Question, Long> {
    List<Question> findAllByType(String type);
    List<Question> findAll();
}
