const searchInput = document.getElementById('searchInput');
const suggestionsContainer = document.getElementById('suggestions');

const suggestions = [
    { term: 'Tractor.', url: 'tractor.html' },
    { term: 'Equipment.', url: 'Equipment.html' },
    { term: 'Harvester.', url: 'harvester.html' },
    { term: 'Combo.', url: 'combo.html' },
    { term: 'JCB.', url: 'jcb.html' },
];

searchInput.addEventListener('input', function() {
  const input = this.value.toLowerCase();
  const matchedSuggestions = suggestions.filter(suggestion =>
    suggestion.term.toLowerCase().includes(input)
  );

  suggestionsContainer.innerHTML = '';

  if (input.trim() !== '') {
    matchedSuggestions.forEach(suggestion => {
      const suggestionElement = document.createElement('div');
      suggestionElement.classList.add('suggestion');
      suggestionElement.textContent = suggestion.term;
      suggestionElement.addEventListener('click', function() {
        window.location.href = suggestion.url;
      });
      suggestionsContainer.appendChild(suggestionElement);
    });
    suggestionsContainer.style.display = 'block';
  } else {
    suggestionsContainer.style.display = 'none';
  }
});

searchInput.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    const input = this.value.toLowerCase();
    const matchedSuggestion = suggestions.find(suggestion =>
      suggestion.term.toLowerCase() === input
    );

    if (matchedSuggestion) {
      window.location.href = matchedSuggestion.url;
    }
  }
});
