var me ={
  name:'Brack',
  location:'Here',
  occupations: ['Student', 'Superhero', 'Mentor'],
  hobbies:[
    {name:'Games', type:"current"},
    {name:'piano', type:"past"}]
};

module.exports = {
  getName: function(req, res, next){
    res.send({name: me.name});
  },
  getLocation: function(req, res, next){
    res.send({location: me.location});
  },
  getOccupations: function(req, res, next){
    res.send({occupations: me.occupations});
  },
  getLatestOccupations: function(req, res, next){
    res.send({latestOccupation: me.occupations[me.occupations.length - 1]});
  },
  getHobbies: function(req, res, next){
    res.send({hobbies: me.hobbies});
  },
  getHobbiesType: function(req, res, next){
    var type = req.params.type;
    var hobbyArray = [];
    me.hobbies.forEach(function(hobby, index, array){
      if (hobby.type === type){
        hobbyArray.push(hobby);
      }
    });
    res.send({filteredHobbies: hobbyArray});
  }
};
