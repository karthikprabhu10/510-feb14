document.addEventListener('DOMContentLoaded', function () {
    // Love Note Generator
    const loveNoteContainer = document.getElementById('loveNote');
    const generateLoveNoteButton = document.getElementById('generateLoveNoteButton');

    const loveNotes = [
        "In your gaze, I found my forever.",
"Your laughter is the melody my heart dances to.",
"Love is the poetry written in the language of our souls.",
"Your smile is the sun that brightens my darkest days.",
"In your arms, I've discovered my favorite home.",
"Your love is the compass that guides my wandering heart.",
"Every heartbeat whispers your name to my soul.",
"You are the missing piece that completes my puzzle of happiness.",
"Our love story is my favorite adventure.",
"Your kindness is a gentle breeze that soothes my spirit.",
"With you, every moment is a precious chapter in our love story.",
"Your love is the canvas on which my dreams are painted.",
"Your touch is the magic that turns ordinary moments into extraordinary memories.",
"In your eyes, I see the reflection of my forever.",
"Your love is the symphony that plays in the background of my life.",
"You are the muse that inspires the artistry of my heart.",
"Your love is the anchor that keeps me grounded in a chaotic world.",
"With you, every day feels like a celebration of love.",
"Your presence is the warmth that melts away my worries.",
"You are the miracle that turned my world into a fairy tale.",
"Our love is a journey that I never want to end.",
"Your love is the sweetest melody my heart ever heard.",
"In your embrace, I've found my sanctuary.",
"You are the poetry my heart writes in the language of love.",
"Loving you feels like breathing—effortless and essential.",
"Your love is the light that brightens my darkest days.",
"You are the dream I never want to wake up from.",
"In your love, I've found the home my soul always longed for.",
"Every moment with you is a page in our love story.",
"Your love is the answer to every question my heart asks.",
"Loving you is the most beautiful adventure of my life.",
"You are the magic that turned my world from black and white to color.",
"Your laughter is the sweetest melody my heart craves.",
"In your eyes, I see the reflection of a love that lasts a lifetime.",
"You are the sunshine that brightens my cloudiest days.",
"Your love is the map that guides my heart to happiness.",
"Loving you is the best decision my heart ever made.",
"You are the warmth that melts away the chill in my soul.",
"Your love is the masterpiece that colors the canvas of my life.",
"In your presence, I've discovered the meaning of true happiness.",
"Loving you feels like finding a hidden treasure in my heart.",
"Your love is the melody that plays in the soundtrack of my life.",
"You are the reason my heart sings with joy.",
"In your arms, I've found my favorite place in the world.",
"Your love is the anchor that keeps me steady in the storms of life.",
"Loving you is the best adventure I've ever embarked on.",
"You are the sunshine that brightens my darkest days.",
"Your love is the magic that makes every day special.",
"In your eyes, I see the reflection of a love that knows no bounds.",
"Loving you is the sweetest journey my heart has ever taken.",








        // Add more love notes as needed
    ];

    generateLoveNoteButton.addEventListener('click', function () {
        const randomIndex = Math.floor(Math.random() * loveNotes.length);
        loveNoteContainer.textContent = loveNotes[randomIndex];
    });
});
