package com.example.socrates.web;

import com.example.socrates.Question;
import com.example.socrates.data.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SaveController {
    private final QuestionRepository repo;

    @Autowired
    public SaveController(QuestionRepository repo){
        this.repo = repo;
    }

    @RequestMapping(value="/save", method= RequestMethod.POST)
    public String saveQuestion(@RequestBody Question question){
        Question saved = repo.save(question);
        return "전송결과 : 성공 (id : " + saved.getId() + ")";
    }
}
