/**
 * Auto Acoustics Chat Widget Initialization
 * This file contains the initialization code for the chat widget
 */

$(document).ready(function() {
    // Check if we need to auto-open the chat
    const urlParams = new URLSearchParams(window.location.search);
    const shouldOpenChat = urlParams.get('openChat') === 'true';

    // Initialize chat widget
    const chatWidget = new TDEChatWidget({
        target: 'chat-container',
        webhookUrl: 'https://n8n.aaa-city.com/webhook/532412c6-ff72-464d-b3fa-c0bd941ff05a/chat',
        headerTitle: {
            main: 'Auto Acoustics<br>AI Assistant',
            sub: 'Powered by AAA.City'
        },
        initialMessages: [
            'Hi there! 👋',
            'Welcome to Auto Acoustics. How can I help you today?',
            'Feel free to ask me anything about our audio services, installations, or products.'
        ],
        metadata: {
            source: 'website',
            page: window.location.pathname.split('/').pop().split('.')[0] || 'home',
            fromChatIcon: shouldOpenChat
        },
        minimized: !shouldOpenChat, // Auto-expand if openChat=true
        minimizedContent: `
            <i class="flaticon-customer-service"></i>
            <span>Hey 👋 Need help? Let's chat!</span>
        `
    });

    // Add custom toggle function to properly handle expanded state
    const chatContainer = document.getElementById('chat-container');
    const originalToggle = chatWidget.toggle;

    chatWidget.toggle = function() {
        originalToggle.call(this);
        chatContainer.classList.toggle('expanded', !chatContainer.classList.contains('minimized'));
    };

    // Set initial expanded state
    if (!chatWidget.options.minimized) {
        chatContainer.classList.add('expanded');
    }
});
