public with sharing class AccountSearchController {
    @AuraEnabled
    public static List<Account> searchAccounts(String searchTerm) {
        List<Account> accounts = new List<Account>();
        if (String.isNotBlank(searchTerm)) {
            String query = 'SELECT Id, Name, Phone, Website,' +
                    ' BillingStreet, BillingCity, BillingState,' +
                    ' BillingPostalCode FROM Account WHERE Name LIKE \'%' + searchTerm + '%\''+
                    'ORDER BY Name';
            accounts = Database.query(query);
        }
        return accounts;
    }
}