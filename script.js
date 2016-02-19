
function init_db(db_name){
	var stor = JSON.parse(window.localStorage[db_name])
	var add_db = new Object()
	this.name="todo database"
	this.set = function(key,value){
		add_db[key]=value
	}
	this.save=function(){
		stor.push(add_db)
		window.localStorage[db_name]=JSON.stringify(stor)
	}
	this.destroy = function(){
		var new_arr = new Array()
		window.localStorage[db_name]=JSON.stringify(new_arr)
	}
}


vm = new Vue({
  el: ".app",
  data: {
   	todos:[],
    removed_todos: [],
    new_todo: "",
  },
  methods: {
    add_todo: function() {
      var todo_content = this.new_todo
      if (todo_content) {
      	var new_todo_ls = new init_db("todo")
        this.todos.push({
          "content": todo_content
        })
        new_todo_ls.set("content",todo_content)
        new_todo_ls.save()
        this.new_todo = ""
        
      }
    },
    remove_todo: function(index_) {
      removed_todo = this.todos.splice(index_, 1)[0]
      this.removed_todos.push(removed_todo)

    }

  }

})



function get_db(db_name){
		var stor = JSON.parse(window.localStorage[db_name])
    if(stor){
    console.log("ccc")
    	return stor
    }
    else{
    console.log("asd'")
    window.localStorage[db_name] = JSON.stringify("[]")
    var a = []
    return a
    }
    

}
var init_data = get_db("todo")

vm.todos = init_data