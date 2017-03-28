$(document).ready(function() {


  var emotions = {
    'anxious': {
      scenarios: ["My boss just found out I don't actually do ANY work", "My boss just won't drop the fact that I'm lazy", "My boss fired me because I don't actually do any work", "Sad! I've been fired!"],
      advice: ["Easy! Repeat after me - 'That makes me smart!' - which was what Donald Trump said in response to Hillary Clinton's suggestion that he pays no federal income tax", "Reverse psychology is your friend. Tell your boss HE'S lazy!", "Jobs are overrated like Meryl Streep. Also we're bringing GREAT jobs back! In mining and manufacturing and, wait what? You want health insurance too?", "Reach out to your friends. Russia if you're listening..."]
    },
    'bored': {
      scenarios: ["Bureaucracy is driving me crazy", "Boring... people keep asking for facts", "People keep talking about stupid climate change.", "I can't get girls to go on dates with me"],
      advice: ["Keep pushing back on the red tape. Who cares if you sound stupid, uninformed, and irresponsible? Case in point - Donald Trump, reportedly asking a foreign policy adviser three times during a meeting why the U.S. couldn\’t use its nuclear weapons stockpile, according to MSNBC", "If people wants facts, you have to give them facts. Ooops I meant 'facts'. You know like alternative facts. By the way, the microwave oven is totally spying on you.", "Why does everyone care so much about this? Shell and BP aren't worried! Repeat after me - the concept of global warming was created by and for the Chinese in order to make US manufacturing non-competitive.", "Part of the beauty of me is that I am very rich. And when you're rich... oh I can't say anymore. I got into a lot of trouble the last time. You're on your own!"]
    },

    'overwhelmed': {
      scenarios: ["I don't understand the clouds in the computer", "My work load just exploded", "The economy really is bigly complex", "People keep questioning my authority and decisions"],
      advice: ["The cyber. It is  huge problem. Huge. We could be doing better. Other people are beating us at the cyber. We need to start winning again. Let's build a wall. We will build a giant wall to keep the cyber out and Mexico will pay for it. What? The cyber isn't an army?", "Repeat after me - I will be so good at the (insert as necessary) your head will spin.", "Just wing it. Then blame Paul Ryan", "Easy! Taunt your enemies with bizarre, aggressive tweets that display your insecurities and immaturity. Like this - Happy New Year to all, including to my many enemies and those who have fought me and lost so badly they just don't know what to do. Love! (This was an actual tweet from Donald Trump on New Year's Day 2017)"]
    }
  }

  $('.emotions').click(function () {
    $("#context").children('option:not(:first)').remove();
    var emotion = $(this).attr('value')

    emotions[emotion].scenarios.forEach(function (scenario) {
      var $item = $('<option>')
      $item.text(scenario)
      $("#context").append($item);
    })

    $('#context').change(function () {
      var option = $(this).val()
      var index = emotions[emotion].scenarios.indexOf(option)
      var text = emotions[emotion].advice[index]
      var advice = $("<p>").addClass("advice").text(text)
      $(".advice").remove()
      $(".adviceheading").append(advice)
    })
  })
  
});
