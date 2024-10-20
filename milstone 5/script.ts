// Get references to the form and display area
const form = document.getElementById('Resume-form') as HTMLFormElement | null;
const resumeDisplayElement = document.getElementById('Resume-Display') as HTMLDivElement | null;

if (form && resumeDisplayElement) {
    // Handle form submission
    form.addEventListener('submit', (event: Event) => {
        event.preventDefault(); // Prevent page reload

        // Collect input values
        const Name = (document.getElementById('Name') as HTMLInputElement).value;
        const Email = (document.getElementById('Email') as HTMLInputElement).value;
        const Phone = (document.getElementById('Phone') as HTMLInputElement).value;
        const Education = (document.getElementById('Education') as HTMLTextAreaElement).value;
        const Experience = (document.getElementById('Experience') as HTMLTextAreaElement).value;
        const Skills = (document.getElementById('Skills') as HTMLTextAreaElement).value;

        // Generate the resume content dynamically
        const resumeHTML = `
        <h2><b>Editable Resume</b></h2>
        <h3>Personal Information</h3>
        <p><b>Name:</b><span contenteditable="true">${Name}</span></p>
        <p><b>Email:</b><span contenteditable="true">${Email}</span></p>
        <p><b>Phone:</b><span contenteditable="true">${Phone}</span></p>

        <h3>Education</h3>
        <p contenteditable="true">${Education}</p>

        <h3>Experience</h3>
        <p contenteditable="true">${Experience}</p>

        <h3>Skills</h3>
        <p contenteditable="true">${Skills}</p>
        `;

        // Display the generated resume 
        resumeDisplayElement.innerHTML = resumeHTML;

        // Show shareable link section (dummy logic to be replaced with real functionality)
        const linkContainer = document.getElementById('shareable-link-container') as HTMLDivElement;
        if (linkContainer) {
            linkContainer.style.display = 'block';
        }
    });
}
