citCounts=1;
roles=[
  {
    "name":"Citizen",
    "faction":"Town",
    "group":"Citizen",
    "counts":citCounts
  },
  {
    "name":"Mayor",
    "faction":"Town",
    "group":"Power",
    "unique":true
  },
  {
    "name":"Sheriff",
    "faction":"Town",
    "group":"Investigative"
  },
  {
    "name":"Investigator",
    "faction":"Town",
    "group":"Investigative",
  },
  {
    "name":"Lookout",
    "faction":"Town",
    "group":"Investigative",
  }
];
rolelist=[];
function randFromArray(arr)
{
  return arr[Math.floor((Math.random()*arr.length))];
}
function roleAny()
{
  return randFaction(randFromArray(["Town","Mafia","Neutral"]));
}
function randFaction(fact)
{
  var arr=[];
  for(var i=0;i<roles.length;i++)
  {
    if(roles[i].faction==fact&&(rolelist.indexOf(roles[i].name)===-1||!roles[i].unique))
    {
      if(roles[i].counts)
      {
        for(var j=0;j<roles[i].counts;j++)
        {
          arr.push(roles[i].name);
        }
      }
      else
      {
        arr.push(roles[i].name);
      }
    }
  }
  return randFromArray(arr);
}
function randGroup(fact,group)
{
  var arr=[];
  for(var i=0;i<roles.length;i++)
  {
    if(roles[i].faction==fact&&roles[i].group==group&&(rolelist.indexOf(roles[i].name)===-1||!roles[i].unique))
    {
      if(roles[i].counts)
      {
        for(var j=0;j<roles[i].counts;j++)
        {
          arr.push(roles[i].name);
        }
      }
      else
      {
        arr.push(roles[i].name);
      }
    }
  }
  return randFromArray(arr);
}
function randomizeRoles()
{
  rolelist.push(roleFaction("Town"));
  return rolelist.join("\n");
}
