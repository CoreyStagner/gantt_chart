import Head from 'next/head';
import Input from '../../components/Form/Input';
import { Button } from '../../components/Button/Button';

export default function Doc_Form() {
  /**
   * This function will allow the user to quickly copy the color variable to the clipboard
   *
   * @param {HTMLClickEvent} e The click event for when a swatch is clicked
   * @returns {void}
   */
  const handleColorPick = async (e) => {
    try {
      await navigator.clipboard.writeText(e.target.dataset.color);
      console.log('Text copied to clipboard');
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <div>
      <Head>
        <title>Documentation - Form Elements</title>
      </Head>

      <main>
        <div>
          <h2>Input Fields</h2>
          {/* TODO: Add a description of the input fields */}
          <p>Input fields ...</p>
          <h3>Variants</h3>

          <Input
            label="Solid"
            value=""
            hasError={false}
            onChange={(val) => setIssueName(val)}
            hintText="Help Text"
            variants="Solid"
            errorMessage={false}
            inputAttributes={{
              id: 'issueName',
              name: 'field_name',
              className: '',
              required: true,
              placeholder: 'Placeholder Text: Enter Issue Name',
            }}
          />

          <Input
            label="Outline"
            value=""
            hasError={false}
            onChange={(val) => setIssueName(val)}
            hintText="Help Text"
            variants="Outline"
            errorMessage={false}
            inputAttributes={{
              id: 'issueName',
              name: 'field_name',
              className: '',
              required: true,
              placeholder: 'Placeholder Text: Enter Issue Name',
            }}
          />

          <Input
            label="Standard"
            value=""
            hasError={false}
            onChange={(val) => setIssueName(val)}
            hintText="Help Text"
            variants="Standard"
            errorMessage={false}
            inputAttributes={{
              id: 'issueName',
              name: 'field_name',
              className: '',
              required: true,
              placeholder: 'Placeholder Text: Enter Issue Name',
            }}
          />
        </div>

        <div>
          <h2>Buttons</h2>
          <p>Buttons ...</p>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <h3>Primary</h3>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '10px',
              }}
            >
              <Button
                size="xsmall"
                modifier="primary"
                textContent="Primary (Extra Small)"
              />
              <Button
                size="small"
                modifier="primary"
                textContent="Primary (Small)"
              />
              <Button
                size="medium"
                modifier="primary"
                textContent="Primary (Medium)"
              />
              <Button
                size="large"
                modifier="primary"
                textContent="Primary (Large)"
              />
              <Button
                size="xlarge"
                modifier="primary"
                textContent="Primary (Extra Large)"
              />
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <h3>Secondary</h3>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '10px',
              }}
            >
              <Button
                size="xsmall"
                modifier="Secondary"
                textContent="Secondary (Extra Small)"
              />
              <Button
                size="small"
                modifier="Secondary"
                textContent="Secondary (Small)"
              />
              <Button
                size="medium"
                modifier="Secondary"
                textContent="Secondary (Medium)"
              />
              <Button
                size="large"
                modifier="Secondary"
                textContent="Secondary (Large)"
              />
              <Button
                size="xlarge"
                modifier="Secondary"
                textContent="Secondary (Extra Large)"
              />
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <h3>Tertiary</h3>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '10px',
              }}
            >
              <Button
                size="xsmall"
                modifier="Tertiary"
                textContent="Tertiary (Extra Small)"
              />
              <Button
                size="small"
                modifier="Tertiary"
                textContent="Tertiary (Small)"
              />
              <Button
                size="medium"
                modifier="Tertiary"
                textContent="Tertiary (Medium)"
              />
              <Button
                size="large"
                modifier="Tertiary"
                textContent="Tertiary (Large)"
              />
              <Button
                size="xlarge"
                modifier="Tertiary"
                textContent="Tertiary (Extra Large)"
              />
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <h3>Disabled</h3>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '10px',
              }}
            >
              <Button
                size="xsmall"
                modifier="Disabled"
                disabled={true}
                textContent="Disabled (Extra Small)"
              />
              <Button
                size="small"
                modifier="Disabled"
                disabled={true}
                textContent="Disabled (Small)"
              />
              <Button
                size="medium"
                modifier="Disabled"
                disabled={true}
                textContent="Disabled (Medium)"
              />
              <Button
                size="large"
                modifier="Disabled"
                disabled={true}
                textContent="Disabled (Large)"
              />
              <Button
                size="xlarge"
                modifier="Disabled"
                disabled={true}
                textContent="Disabled (Extra Large)"
              />
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <h3>Block</h3>
            <div
              style={{
                width: '100%',
              }}
            >
              <Button
                size="xsmall"
                modifier="Primary Block"
                textContent="Block (Extra Small)"
              />
              <Button
                size="small"
                modifier="Primary Block"
                textContent="Block (Small)"
              />
              <Button
                size="medium"
                modifier="Primary Block"
                textContent="Block (Medium)"
              />
              <Button
                size="large"
                modifier="Primary Block"
                textContent="Block (Large)"
              />
              <Button
                size="xlarge"
                modifier="Primary Block"
                textContent="Block (Extra Large)"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
