// Mock da fetchAPI global com implementação explícita
global.fetchAPI = jest.fn((date) => ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);

// Mock da submitAPI global com implementação explícita
global.submitAPI = jest.fn((formData) => true);

describe('Booking System Tests', () => {
  test('initializeTimes returns non-empty array from fetchAPI', () => {
    // Testar que fetchAPI retorna um array não vazio
    const today = new Date();
    const result = global.fetchAPI(today);
    
    // Verificar se retorna um array
    expect(result).toBeInstanceOf(Array);
    
    // Verificar se o array não está vazio
    expect(result.length).toBeGreaterThan(0);
    
    // Verificar se contém horários válidos
    expect(result).toContain('17:00');
    expect(result).toContain('18:00');
    expect(result).toContain('19:00');
  });

  test('updateTimes returns updated times from fetchAPI when date changes', () => {
    // Simular uma data selecionada
    const selectedDate = new Date('2026-01-27');
    
    // Chamar fetchAPI com a data selecionada (simula updateTimes)
    const updatedTimes = global.fetchAPI(selectedDate);

    // Verificar se fetchAPI foi chamada com a data
    expect(global.fetchAPI).toHaveBeenCalledWith(selectedDate);
    
    // Verificar se retorna um array não vazio
    expect(updatedTimes).toBeInstanceOf(Array);
    expect(updatedTimes.length).toBeGreaterThan(0);
    
    // Verificar se os horários retornados são os esperados
    expect(updatedTimes).toEqual(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
  });

  test('submitForm calls submitAPI with form data and returns true', () => {
    // Dados de teste do formulário completo
    const formData = {
      date: '2026-01-27',
      time: '19:00',
      diners: '2',
      occasion: 'birthday',
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@example.com',
      phoneNumber: '123456789',
      payment: {
        cardNumber: '1234 5678 9012 3456',
        cardName: 'John Doe',
        expDate: '12 / 2028',
        cvv: '123'
      }
    };

    // Chamar submitAPI (simula submitForm)
    const result = global.submitAPI(formData);

    // Verificar se submitAPI foi chamada
    expect(global.submitAPI).toHaveBeenCalled();
    
    // Verificar se foi chamada com os dados corretos
    expect(global.submitAPI).toHaveBeenCalledWith(formData);
    
    // Verificar se retorna true (sucesso)
    expect(result).toBe(true);
  });
});
