document.addEventListener('DOMContentLoaded', function () {
    // Get the input elements
    var input1 = document.getElementById('input1');
    var input2 = document.getElementById('input2');
    var input3 = document.getElementById('input3');
    // Handle form submission
    var submitButton = document.getElementById('submit-button');
    submitButton.addEventListener('click', function () {
        var siteName = input1.value;
        var channelName = input2.value;
        var folderName = input3.value;
        // Check if all inputs are filled
        if (!siteName || !channelName || !folderName) {
            alert('Please fill out all fields.');
        }
        else {
            // Show a message box with the input values
            alert("The team does not have the required permissions and cannot register.\nSubmitted:\nSite URL: ".concat(siteName, "\nChannel Name: ").concat(channelName, "\nFolder: ").concat(folderName));
            // 外部應用的結束處理邏輯
            var urlParams = new URLSearchParams(window.location.search);
            var callbackUrl = urlParams.get('callback');
            if (callbackUrl) {
                // 在回調 URL 中附加參數 `result=true`，並返回伺服器
                var updatedCallbackUrl = new URL(callbackUrl);
                updatedCallbackUrl.searchParams.set('result', 'true'); // 加入 result=true
                window.location.href = updatedCallbackUrl.toString();
            }
        }
    });
});
