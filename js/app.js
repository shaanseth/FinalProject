$(document).ready(function() {

  var emotions = {
    'anxious': {
      scenarios: ["My boss just found out I don't actually do ANY work", "My boss just won't drop the fact that I don't actually do any work", "My boss fired me because I don't actually do any work", "Sad! I've been fired!"],
      advice: ["Easy! Repeat after me - 'That makes me smart!' - which was what Donald Trump said in response to Hillary Clinton's suggestion that he pays no federal income tax", "Loser! Try reverse psychology. Tell your boss HE'S fired!", "Remember it's better to live one day as a lion than 100 years a sheep. What does that mean? I don't know! Ciao I'm off to play golf.", "Reach out to your friends. Russia if you're listening..."]
    },
    'bored': {
      scenarios: ["Like because... I don't know", "This is getting old... people keep asking me to back up my lies", "People keep talking about stupid climate change. BORING!", "No one invites me to parties anymore"],
      advice: ["I'm never bored because I'm a naturally curious person. My advice is ask better questions! I ask terrific questions. No one asks better questions than me. Although one time, Donald Trump asked a better question than me. He asked 'Why can't we use nuclear weapons?' It's true! (Donald Trump, reportedly asking a foreign policy adviser three times during a meeting why the U.S. couldn’t use its nuclear weapons stockpile, according to MSNBC)", "The truth is the enemy. What do we know? All we know is what's on the internet. Also take it from me no one cares about your taxes so chill out already.", "Boring! Repeat after me - the concept of global warming was created by and for the Chinese in order to make US manufacturing non-competitive.", "Be patient! Communicating your core beliefs and values in a kind and respectful manner can be a challenging process. It's an art really. I like to start with 'Part of the beauty of me is that I am very rich'"]
    },

    'overwhelmed': {
      scenarios: ["I don't understand the clouds in the computer", "My work load just exploded", "The economy really is bigly complex", "People keep questioning my authority and decisions"],
      advice: ["The cyber. It is  huge problem. Huge. We could be doing better. Other people are beating us at the cyber. I have a son, he's 10 years old. He has computers. He is so good with these computers. It's unbelievable. I'll ask him about the clouds and I'll get back to you.", "Repeat after me - I will be so good at the (insert as necessary) your head will spin.", "Pfft fake it. Repeat after me - nobody understand the economy like I do. No one will get the economy more than me. No one can do more for the economy than me. I will be the best understanderer of the economy there is.", "Small potatoes. Borrow a direct quote from a hero - Sorry losers and haters but my IQ is one of the highest and all of you know it. Please don't feel stupid or insecure it's not your fault."]
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
