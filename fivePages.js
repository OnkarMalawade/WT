const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    // Routing based on URL
    switch (req.url) {
        case '/':
            sendResponse(res, 'University Home Page', 'Welcome to the University Home Page!');
            break;
        case '/colleges':
            sendCollegesPage(res);
            break;
        case '/faculty':
            sendResponse(res, 'Faculty Details', 'Display faculty details in tabular format');
            break;
        case '/students':
            sendResponse(res, 'Student Details', 'Display student details in tabular format');
            break;
        case '/courses':
            sendResponse(res, 'Course Details', 'Display course details in tabular format');
            break;
        default:
            sendResponse(res, '404 Not Found', 'Page not found', 404);
            break;
    }
});

function sendResponse(res, title, content, statusCode = 200) {
    res.writeHead(statusCode, { 'Content-Type': 'text/html' });
    const html = `<html>
                    <head>
                        <title>${title}</title>
                    </head>
                    <body>
                        <h1>${title}</h1>
                        <p>${content}</p>
                    </body>
                 </html>`;
    res.end(html);
}

function sendCollegesPage(res) {
    // Simulating fetching college data (replace this with your actual data)
    const colleges = [
        { name: 'College 1', location: 'City 1' },
        { name: 'College 2', location: 'City 2' },
        // Add more colleges as needed
    ];

    res.writeHead(200, { 'Content-Type': 'text/html' });
    const tableRows = colleges.map(college => `<tr><td>${college.name}</td><td>${college.location}</td></tr>`).join('');
    const html = `<html>
                    <head>
                        <title>List of Colleges</title>
                    </head>
                    <body>
                        <h1>List of Colleges</h1>
                        <table border="1">
                            <tr>
                                <th>Name</th>
                                <th>Location</th>
                            </tr>
                            ${tableRows}
                        </table>
                    </body>
                 </html>`;
    res.end(html);
}

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});