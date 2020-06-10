/**
 * Arguments of Ajax Form
 * @typedef {Object} AjaxArgs
 * @property {string} url - Url of the form
 * @property {string} target - Target of the form (default _blank)
 * @property {string} method - Method of the form (default POST)
 * @property {Object} data - variables to send to form
 */


/**
 * 
 * @param {AjaxArgs} args 
 */
const ajaxform = (args) => {
    const form = document.createElement('form');
    form.action = args.url;
    form.target = args.target || '_blank';
    form.method = args.method || 'POST';

    const createInput = (name, value) => {
        if (Array.isArray(value)) {
            value.forEach((v2) => {
                createInput(`${name}[]`, v2);
            });
        } else if (typeof value === 'object' && value !== null) {
            for (let i in value) {
                if (value.hasOwnProperty(i)) {
                    createInput(`${name}[${i}]`, value[i]);
                }
            }
        } else if (value !== null && value !== undefined) {
            const input = document.createElement('input');
            input.name = name;
            input.type = 'hidden';
            input.value = value;
            form.appendChild(input);
        }
    }

    if (args.data) {
        for (let i in args.data) {
            if (args.data.hasOwnProperty(i)) {
                createInput(i, args.data[i]);
            }
        }
    }

    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);
}


export default ajaxform;