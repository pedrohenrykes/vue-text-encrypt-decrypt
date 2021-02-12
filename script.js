const app = new Vue({
    el: '#main',
    data: {
      encryptTextInput: '',
      decryptTextInput: '',
      errorMessage: '',
      resultTitle: '',
      resultText: '',
    },
    methods: {
      encrypting: function(event) {
        event.preventDefault();

        if ( this.encryptTextInput.length > 0 ) {
          this.resultTitle = 'Text encrypted';
          this.resultText = btoa(this.encryptTextInput)
          this.errorMessage = "";
        } else {
          this.resultTitle = '';
          this.resultText = '';
          this.errorMessage = "Type a text to encrypt";
        }
      },
      verify64base: function(text) {
        const regex = /^([A-Za-z0-9+/])*([A-Za-z0-9+/]|[A-Za-z0-9+/]=|[A-Za-z0-9+/]==)$/;
        return regex.test(text);
      },
      decrypting: function(event) {
        event.preventDefault();

        const verify64base = this.verify64base(this.decryptTextInput);

        if ( verify64base && this.decryptTextInput.length > 0) {
          this.resultTitle = 'Text decrypted';
          this.resultText = atob(this.decryptTextInput);
          this.errorMessage = "";
        } else {
          this.resultTitle = '';
          this.resultText = '';
          this.errorMessage = "That is no valid format!";
        }
      }
    }
});