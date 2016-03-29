Template.categoryTree.onCreated(function(){
  this.autorun(() => {
    this.subscribe('Category');
  });
})
Template.categoryTree.helpers({
  CategoryList: function() {
    var obj = Category.find().fetch();

    obj.sort(function(a, b){
      if (!a.parentId) {
        return 1;
      }
      if (!b.parentId) {
        return 1;
      }
      return -1;
    });
    console.log(obj);
    var tree = document.getElementById("categoryList");
    for (var i = 0; i < obj.length; ++i) {
      if (obj[i].parentId == null) {
          createTreeElement("li", obj[i]._id, obj[i].title, tree);
      } else {
          var treeChildNode = document.getElementById( obj[i].parentId).getElementsByTagName("ul");
          if (treeChildNode.length) {
            createTreeElement("li", obj[i]._id, obj[i].title, treeChildNode[0]);
          } else {
            createTreeElement("ul", obj[i].parentId, "", document.getElementById( obj[i].parentId));
            createTreeElement("li", obj[i]._id, obj[i].title, document.getElementById( obj[i].parentId).getElementsByTagName("ul")[0]);
          }
      }
    }

    function createTreeElement(name, id, text, parent) {
      if(name == 'ul') {
       var node = document.createElement(name);
       node.id = "t" + id;
       node.innerHTML = text;
       parent.appendChild(node);
     } else {
        Blaze.renderWithData(Template.categoryItem, {Category:{_id:id, title:text}}, parent);
      }
    }
  }
})
