function get_personality() {
    var type = {type:"personality"};
    $.ajax({
        url: "/question",
        data: type,
        type:"POST",
        success: function (data) {
            if (data){
                data = JSON.parse(data);

                $("#q_block_type").text(data.type);
                $("#q_block_question").text(data.question);
                $("#q_block_keyword").text(data.keyword);
                $("#q_block_answer").text(data.answer);
            }
            else{
                $("#q_block_type").text("...");
                $("#q_block_question").text("...");
                $("#q_block_keyword").text("...");
                $("#q_block_answer").text("...");
            }
        },
        error: function (e){
            console.log("get_personality error");
            console.log(e);
        }
    });
}

function get_skill() {
    var type = {type:"skill"};
    $.ajax({
        url: "/question",
        data: type,
        contentType: "application/json; charset=utf-8;",
        type:"POST",
        success: function (data) {
            if (data){
                data = JSON.parse(data);

                $("#q_block_type").text(data.type);
                $("#q_block_question").text(data.question);
                $("#q_block_keyword").text(data.keyword);
                $("#q_block_answer").text(data.answer);
            }
            else{
                $("#q_block_type").text("...");
                $("#q_block_question").text("...");
                $("#q_block_keyword").text("...");
                $("#q_block_answer").text("...");
            }
        },
        error: function (e){
            console.log("get_skill error");
            console.log(e);
        }
    });
}

function get_project() {
    var type = {type:"project"};
    $.ajax({
        url: "/question",
        data: type,
        contentType: "application/json; charset=utf-8;",
        type:"POST",
        success: function (data) {
            if (data){
                data = JSON.parse(data);

                $("#q_block_type").text(data.type);
                $("#q_block_question").text(data.question);
                $("#q_block_keyword").text(data.keyword);
                $("#q_block_answer").text(data.answer);
            }
            else{
                $("#q_block_type").text("...");
                $("#q_block_question").text("...");
                $("#q_block_keyword").text("...");
                $("#q_block_answer").text("...");
            }
        },
        error: function (e){
            console.log("get_project error");
            console.log(e);
        }
    });
}

function get_all() {
    var type = {type:"all"};
    $.ajax({
        url: "/question",
        data: type,
        contentType: "application/json; charset=utf-8;",
        type:"POST",
        success: function (data) {
            if (data){
                data = JSON.parse(data);

                $("#q_block_type").text(data.type);
                $("#q_block_question").text(data.question);
                $("#q_block_keyword").text(data.keyword);
                $("#q_block_answer").text(data.answer);
            }
            else{
                $("#q_block_type").text("...");
                $("#q_block_question").text("...");
                $("#q_block_keyword").text("...");
                $("#q_block_answer").text("...");
            }
        },
        error: function (e){
            console.log("get_all error");
            console.log(e);
        }
    });
}

function put_question() {
    var q = {
        question:$("#question").val(),
        keyword:$("#keyword").val(),
        answer:$("#answer").val(),
        type:$("#type").val()
    };

    $.ajax({
        url: "/save",
        data: JSON.stringify(q),
        contentType: "application/json; charset=utf-8;",
        type: "POST",
        success: function (data) {
            console.log(data);
            $("#saved").text(data);

            $("#question").val("");
            $("#keyword").val("");
            $("#answer").val("");
        },
        error: function (e){
            console.log("put_question error");
            console.log(e);
        }
    });
}