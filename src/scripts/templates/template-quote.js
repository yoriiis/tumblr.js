/* prettier-ignore */
export default function TemplateQuote (datas) {
	return `
        <div class="card" data-type="quote">
            <div class="card-body">
                <blockquote class="card-blockquote">
                    <p>${datas.text}</p>
                    <footer class="blockquote-footer">${datas.source}</footer>
                </blockquote>
                <ul class="card-tags">
                    ${datas.tags.map(tag => `
                            <li>
                                <a href="${datas.blog.url}tagged/${tag}" title="#${tag}">#${tag}</a>
                            </li>
                    `).join('')}
                </ul>
            </div>
        </div>
    `
}