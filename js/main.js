
var button =document.getElementById("btn")
var output=document.getElementById("output")
var quots =[
    "Dont walk in front of me I may not follow Dont walk behind me… I may not lead Walk beside me just be my friend― Albert Camus",
  "If you tell the truth, you don't have to remember anything.― Mark Twain",
  "To live is the rarest thing in the world. Most people exist, that is all.― Oscar Wilde",
  "Live as if you were to die tomorrow. Learn as if you were to live forever.― Mahatma Gandhi",
  "I am so clever that sometimes I don't understand a single word of what I am saying.― Oscar Wilde, The Happy Prince and Other Stories",
  "It is better to be hated for what you are than to be loved for what you are not.― Andre Gide, Autumn Leaves",
  "Resentment is like drinking poison and waiting for your enemies to die.--Nelson Mandela.",
  "H.Jackson Brown Jr.Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.― H. Jackson Brown Jr., P.S. I Love You",
];
btn.addEventListener("click",function(){
    var randomQouts = quots[Math.floor(Math.random() * quots.length)]
    output.innerHTML = randomQouts;
})
