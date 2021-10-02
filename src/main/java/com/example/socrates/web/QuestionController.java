package com.example.socrates.web;

import com.example.socrates.Question;
import com.example.socrates.data.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Random;


@RestController
public class QuestionController {
    private final QuestionRepository repo;

    @Autowired
    public QuestionController(QuestionRepository repo){
        this.repo = repo;
    }

    @RequestMapping(value="/question", method= RequestMethod.POST)
    public String sendQuestion(@RequestBody String type){
        type = type.split("=")[1];
        List<Question> questions;
        if (type.equals("all")){
            questions = repo.findAll();
        }
        else{
            questions = repo.findAllByType(type);
        }

        Random rand = new Random();
        if (questions.isEmpty()){
            return "";
        }
        else{
            Question result = questions.get(rand.nextInt(questions.size()));
            return "{" +
                    "\"type\":\""+result.getType()+"\", " +
                    "\"question\":\""+result.getQuestion()+"\", " +
                    "\"keyword\":\""+result.getKeyword()+"\", " +
                    "\"answer\":\""+result.getAnswer()+"\"" +
                    "}";
        }
    }
}