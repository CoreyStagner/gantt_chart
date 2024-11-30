import { useEffect, useState } from 'react';
import Head from 'next/head';
import Input from '../../components/Form/Input';
import { Button } from '../../components/Button/Button';
// import styles from '../styles/Home.module.css';

export default function Doc_Form() {
  const handleColorPick = async (e) => {
    console.log(e.target.dataset.color);
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

        <div>
          <h2>Colors</h2>
          <p>Colors ...</p>
          <h3>Swatches</h3>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'flex-end',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-red-50:
                <br />
                Hex Code:
                <br />
                #ffebee
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-red-50)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-red-50)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-red-100:
                <br />
                Hex Code:
                <br />
                #ffcdd2
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-red-100)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-red-100)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-red-200:
                <br />
                Hex Code:
                <br />
                #ef9a9a
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-red-200)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-red-200)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-red-300:
                <br />
                Hex Code:
                <br />
                #e57373
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-red-300)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-red-300)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-red-400:
                <br />
                Hex Code:
                <br />
                #ef5350
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-red-400)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-red-400)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-red-500:
                <br />
                Hex Code:
                <br />
                #f44336
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-red-500)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-red-500)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-red-600:
                <br />
                Hex Code:
                <br />
                #e53935
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-red-600)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-red-600)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-red-700:
                <br />
                Hex Code:
                <br />
                #d32f2f
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-red-700)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-red-700)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-red-800:
                <br />
                Hex Code:
                <br />
                #c62828
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-red-800)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-red-800)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-red-900:
                <br />
                Hex Code:
                <br />
                #b71c1c
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-red-900)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-red-900)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-red-A100:
                <br />
                Hex Code:
                <br />
                #ff8a80
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-red-A100)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-red-A100)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-red-A200:
                <br />
                Hex Code:
                <br />
                #ff5252
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-red-A200)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-red-A200)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-red-A400:
                <br />
                Hex Code:
                <br />
                #ff1744
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-red-A400)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-red-A400)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-red-A700:
                <br />
                Hex Code:
                <br />
                #d50000
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-red-A700)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-red-A700)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-pink-50:
                <br />
                Hex Code:
                <br />
                #fce4ec
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-pink-50)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-pink-50)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-pink-100:
                <br />
                Hex Code:
                <br />
                #f8bbd0
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-pink-100)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-pink-100)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-pink-200:
                <br />
                Hex Code:
                <br />
                #f48fb1
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-pink-200)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-pink-200)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-pink-300:
                <br />
                Hex Code:
                <br />
                #f06292
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-pink-300)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-pink-300)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-pink-400:
                <br />
                Hex Code:
                <br />
                #ec407a
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-pink-400)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-pink-400)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-pink-500:
                <br />
                Hex Code:
                <br />
                #e91e63
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-pink-500)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-pink-500)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-pink-600:
                <br />
                Hex Code:
                <br />
                #d81b60
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-pink-600)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-pink-600)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-pink-700:
                <br />
                Hex Code:
                <br />
                #c2185b
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-pink-700)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-pink-700)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-pink-800:
                <br />
                Hex Code:
                <br />
                #ad1457
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-pink-800)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-pink-800)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-pink-900:
                <br />
                Hex Code:
                <br />
                #880e4f
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-pink-900)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-pink-900)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-pink-A100:
                <br />
                Hex Code:
                <br />
                #ff80ab
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-pink-A100)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-pink-A100)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-pink-A200:
                <br />
                Hex Code:
                <br />
                #ff4081
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-pink-A200)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-pink-A200)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-pink-A400:
                <br />
                Hex Code:
                <br />
                #f50057
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-pink-A400)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-pink-A400)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-pink-A700:
                <br />
                Hex Code:
                <br />
                #c51162
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-pink-A700)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-pink-A700)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-purple-50:
                <br />
                Hex Code:
                <br />
                #f3e5f5
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-purple-50)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-purple-50)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-purple-100:
                <br />
                Hex Code:
                <br />
                #e1bee7
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-purple-100)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-purple-100)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-purple-200:
                <br />
                Hex Code:
                <br />
                #ce93d8
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-purple-200)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-purple-200)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-purple-300:
                <br />
                Hex Code:
                <br />
                #ba68c8
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-purple-300)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-purple-300)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-purple-400:
                <br />
                Hex Code:
                <br />
                #ab47bc
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-purple-400)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-purple-400)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-purple-500:
                <br />
                Hex Code:
                <br />
                #9c27b0
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-purple-500)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-purple-500)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-purple-600:
                <br />
                Hex Code:
                <br />
                #8e24aa
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-purple-600)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-purple-600)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-purple-700:
                <br />
                Hex Code:
                <br />
                #7b1fa2
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-purple-700)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-purple-700)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-purple-800:
                <br />
                Hex Code:
                <br />
                #6a1b9a
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-purple-800)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-purple-800)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-purple-900:
                <br />
                Hex Code:
                <br />
                #4a148c
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-purple-900)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-purple-900)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-purple-A100:
                <br />
                Hex Code:
                <br />
                #ea80fc
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-purple-A100)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-purple-A100)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-purple-A200:
                <br />
                Hex Code:
                <br />
                #e040fb
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-purple-A200)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-purple-A200)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-purple-A400:
                <br />
                Hex Code:
                <br />
                #d500f9
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-purple-A400)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-purple-A400)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-purple-A700:
                <br />
                Hex Code:
                <br />
                #aa00ff
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-purple-A700)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-purple-A700)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-deeppurple-50:
                <br />
                Hex Code:
                <br />
                #ede7f6
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-deeppurple-50)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-deeppurple-50)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-deeppurple-100:
                <br />
                Hex Code:
                <br />
                #d1c4e9
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-deeppurple-100)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-deeppurple-100)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-deeppurple-200:
                <br />
                Hex Code:
                <br />
                #b39ddb
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-deeppurple-200)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-deeppurple-200)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-deeppurple-300:
                <br />
                Hex Code:
                <br />
                #9575cd
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-deeppurple-300)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-deeppurple-300)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-deeppurple-400:
                <br />
                Hex Code:
                <br />
                #7e57c2
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-deeppurple-400)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-deeppurple-400)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-deeppurple-500:
                <br />
                Hex Code:
                <br />
                #673ab7
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-deeppurple-500)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-deeppurple-500)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-deeppurple-600:
                <br />
                Hex Code:
                <br />
                #5e35b1
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-deeppurple-600)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-deeppurple-600)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-deeppurple-700:
                <br />
                Hex Code:
                <br />
                #512da8
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-deeppurple-700)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-deeppurple-700)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-deeppurple-800:
                <br />
                Hex Code:
                <br />
                #4527a0
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-deeppurple-800)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-deeppurple-800)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-deeppurple-900:
                <br />
                Hex Code:
                <br />
                #311b92
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-deeppurple-900)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-deeppurple-900)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-deeppurple-A100:
                <br />
                Hex Code:
                <br />
                #b388ff
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-deeppurple-A100)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-deeppurple-A100)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-deeppurple-A200:
                <br />
                Hex Code:
                <br />
                #7c4dff
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-deeppurple-A200)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-deeppurple-A200)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-deeppurple-A400:
                <br />
                Hex Code:
                <br />
                #651fff
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-deeppurple-A400)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-deeppurple-A400)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-deeppurple-A700:
                <br />
                Hex Code:
                <br />
                #6200ea
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-deeppurple-A700)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-deeppurple-A700)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-indigo-50:
                <br />
                Hex Code:
                <br />
                #e8eaf6
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-indigo-50)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-indigo-50)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-indigo-100:
                <br />
                Hex Code:
                <br />
                #c5cae9
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-indigo-100)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-indigo-100)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-indigo-200:
                <br />
                Hex Code:
                <br />
                #9fa8da
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-indigo-200)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-indigo-200)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-indigo-300:
                <br />
                Hex Code:
                <br />
                #7986cb
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-indigo-300)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-indigo-300)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-indigo-400:
                <br />
                Hex Code:
                <br />
                #5c6bc0
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-indigo-400)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-indigo-400)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-indigo-500:
                <br />
                Hex Code:
                <br />
                #3f51b5
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-indigo-500)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-indigo-500)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-indigo-600:
                <br />
                Hex Code:
                <br />
                #3949ab
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-indigo-600)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-indigo-600)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-indigo-700:
                <br />
                Hex Code:
                <br />
                #303f9f
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-indigo-700)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-indigo-700)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-indigo-800:
                <br />
                Hex Code:
                <br />
                #283593
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-indigo-800)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-indigo-800)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-indigo-900:
                <br />
                Hex Code:
                <br />
                #1a237e
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-indigo-900)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-indigo-900)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-indigo-A100:
                <br />
                Hex Code:
                <br />
                #8c9eff
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-indigo-A100)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-indigo-A100)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-indigo-A200:
                <br />
                Hex Code:
                <br />
                #536dfe
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-indigo-A200)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-indigo-A200)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-indigo-A400:
                <br />
                Hex Code:
                <br />
                #3d5afe
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-indigo-A400)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-indigo-A400)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-indigo-A700:
                <br />
                Hex Code:
                <br />
                #304ffe
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-indigo-A700)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-indigo-A700)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-pink-50:
                <br />
                Hex Code:
                <br />
                #e3f2fd
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-pink-50)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-pink-50)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-pink-100:
                <br />
                Hex Code:
                <br />
                #bbdefb
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-pink-100)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-pink-100)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-pink-200:
                <br />
                Hex Code:
                <br />
                #90caf9
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-pink-200)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-pink-200)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-pink-300:
                <br />
                Hex Code:
                <br />
                #64b5f6
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-pink-300)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-pink-300)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-pink-400:
                <br />
                Hex Code:
                <br />
                #42a5f5
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-pink-400)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-pink-400)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-pink-500:
                <br />
                Hex Code:
                <br />
                #2196f3
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-pink-500)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-pink-500)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-pink-600:
                <br />
                Hex Code:
                <br />
                #1e88e5
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-pink-600)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-pink-600)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-pink-700:
                <br />
                Hex Code:
                <br />
                #1976d2
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-pink-700)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-pink-700)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-pink-800:
                <br />
                Hex Code:
                <br />
                #1565c0
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-pink-800)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-pink-800)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-pink-900:
                <br />
                Hex Code:
                <br />
                #0d47a1
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-pink-900)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-pink-900)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-pink-A100:
                <br />
                Hex Code:
                <br />
                #82b1ff
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-pink-A100)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-pink-A100)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-pink-A200:
                <br />
                Hex Code:
                <br />
                #448aff
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-pink-A200)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-pink-A200)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-pink-A400:
                <br />
                Hex Code:
                <br />
                #2979ff
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-pink-A400)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-pink-A400)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-pink-A700:
                <br />
                Hex Code:
                <br />
                #2962ff
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-pink-A700)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-pink-A700)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-lightblue-50:
                <br />
                Hex Code:
                <br />
                #e1f5fe
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-lightblue-50)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-lightblue-50)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-lightblue-100:
                <br />
                Hex Code:
                <br />
                #b3e5fc
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-lightblue-100)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-lightblue-100)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-lightblue-200:
                <br />
                Hex Code:
                <br />
                #81d4fa
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-lightblue-200)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-lightblue-200)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-lightblue-300:
                <br />
                Hex Code:
                <br />
                #4fc3f7
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-lightblue-300)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-lightblue-300)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-lightblue-400:
                <br />
                Hex Code:
                <br />
                #29b6f6
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-lightblue-400)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-lightblue-400)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-lightblue-500:
                <br />
                Hex Code:
                <br />
                #03a9f4
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-lightblue-500)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-lightblue-500)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-lightblue-600:
                <br />
                Hex Code:
                <br />
                #039be5
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-lightblue-600)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-lightblue-600)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-lightblue-700:
                <br />
                Hex Code:
                <br />
                #0288d1
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-lightblue-700)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-lightblue-700)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-lightblue-800:
                <br />
                Hex Code:
                <br />
                #0277bd
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-lightblue-800)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-lightblue-800)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-lightblue-900:
                <br />
                Hex Code:
                <br />
                #01579b
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-lightblue-900)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-lightblue-900)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-lightblue-A100:
                <br />
                Hex Code:
                <br />
                #80d8ff
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-lightblue-A100)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-lightblue-A100)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-lightblue-A200:
                <br />
                Hex Code:
                <br />
                #40c4ff
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-lightblue-A200)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-lightblue-A200)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-lightblue-A400:
                <br />
                Hex Code:
                <br />
                #00b0ff
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-lightblue-A400)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-lightblue-A400)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-lightblue-A700:
                <br />
                Hex Code:
                <br />
                #0091ea
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-lightblue-A700)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-lightblue-A700)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-cyan-50:
                <br />
                Hex Code:
                <br />
                #e0f7fa
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-cyan-50)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-cyan-50)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-cyan-100:
                <br />
                Hex Code:
                <br />
                #b2ebf2
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-cyan-100)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-cyan-100)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-cyan-200:
                <br />
                Hex Code:
                <br />
                #80deea
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-cyan-200)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-cyan-200)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-cyan-300:
                <br />
                Hex Code:
                <br />
                #4dd0e1
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-cyan-300)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-cyan-300)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-cyan-400:
                <br />
                Hex Code:
                <br />
                #26c6da
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-cyan-400)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-cyan-400)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-cyan-500:
                <br />
                Hex Code:
                <br />
                #00bcd4
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-cyan-500)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-cyan-500)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-cyan-600:
                <br />
                Hex Code:
                <br />
                #00acc1
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-cyan-600)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-cyan-600)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-cyan-700:
                <br />
                Hex Code:
                <br />
                #0097a7
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-cyan-700)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-cyan-700)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-cyan-800:
                <br />
                Hex Code:
                <br />
                #00838f
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-cyan-800)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-cyan-800)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-cyan-900:
                <br />
                Hex Code:
                <br />
                #006064
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-cyan-900)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-cyan-900)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-cyan-A100:
                <br />
                Hex Code:
                <br />
                #84ffff
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-cyan-A100)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-cyan-A100)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-cyan-A200:
                <br />
                Hex Code:
                <br />
                #18ffff
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-cyan-A200)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-cyan-A200)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-cyan-A400:
                <br />
                Hex Code:
                <br />
                #00e5ff
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-cyan-A400)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-cyan-A400)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-cyan-A700:
                <br />
                Hex Code:
                <br />
                #00b8d4
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-cyan-A700)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-cyan-A700)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-teal-50:
                <br />
                Hex Code:
                <br />
                #e0f2f1
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-teal-50)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-teal-50)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-teal-100:
                <br />
                Hex Code:
                <br />
                #b2dfdb
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-teal-100)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-teal-100)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-teal-200:
                <br />
                Hex Code:
                <br />
                #80cbc4
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-teal-200)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-teal-200)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-teal-300:
                <br />
                Hex Code:
                <br />
                #4db6ac
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-teal-300)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-teal-300)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-teal-400:
                <br />
                Hex Code:
                <br />
                #26a69a
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-teal-400)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-teal-400)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-teal-500:
                <br />
                Hex Code:
                <br />
                #009688
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-teal-500)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-teal-500)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-teal-600:
                <br />
                Hex Code:
                <br />
                #00897b
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-teal-600)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-teal-600)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-teal-700:
                <br />
                Hex Code:
                <br />
                #00796b
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-teal-700)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-teal-700)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-teal-800:
                <br />
                Hex Code:
                <br />
                #00695c
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-teal-800)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-teal-800)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-teal-900:
                <br />
                Hex Code:
                <br />
                #004d40
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-teal-900)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-teal-900)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-teal-A100:
                <br />
                Hex Code:
                <br />
                #a7ffeb
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-teal-A100)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-teal-A100)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-teal-A200:
                <br />
                Hex Code:
                <br />
                #64ffda
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-teal-A200)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-teal-A200)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-teal-A400:
                <br />
                Hex Code:
                <br />
                #1de9b6
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-teal-A400)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-teal-A400)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-teal-A700:
                <br />
                Hex Code:
                <br />
                #00bfa5
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-teal-A700)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-teal-A700)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-green-50:
                <br />
                Hex Code:
                <br />
                #e8f5e9
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-green-50)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-green-50)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-green-100:
                <br />
                Hex Code:
                <br />
                #c8e6c9
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-green-100)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-green-100)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-green-200:
                <br />
                Hex Code:
                <br />
                #a5d6a7
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-green-200)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-green-200)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-green-300:
                <br />
                Hex Code:
                <br />
                #81c784
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-green-300)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-green-300)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-green-400:
                <br />
                Hex Code:
                <br />
                #66bb6a
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-green-400)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-green-400)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-green-500:
                <br />
                Hex Code:
                <br />
                #4caf50
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-green-500)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-green-500)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-green-600:
                <br />
                Hex Code:
                <br />
                #43a047
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-green-600)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-green-600)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-green-700:
                <br />
                Hex Code:
                <br />
                #388e3c
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-green-700)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-green-700)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-green-800:
                <br />
                Hex Code:
                <br />
                #2e7d32
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-green-800)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-green-800)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-green-900:
                <br />
                Hex Code:
                <br />
                #1b5e20
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-green-900)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-green-900)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-green-A100:
                <br />
                Hex Code:
                <br />
                #b9f6ca
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-green-A100)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-green-A100)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-green-A200:
                <br />
                Hex Code:
                <br />
                #69f0ae
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-green-A200)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-green-A200)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-green-A400:
                <br />
                Hex Code:
                <br />
                #00e676
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-green-A400)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-green-A400)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-green-A700:
                <br />
                Hex Code:
                <br />
                #00c853
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-green-A700)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-green-A700)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-lightgreen-50:
                <br />
                Hex Code:
                <br />
                #f1f8e9
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-lightgreen-50)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-lightgreen-50)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-lightgreen-100:
                <br />
                Hex Code:
                <br />
                #dcedc8
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-lightgreen-100)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-lightgreen-100)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-lightgreen-200:
                <br />
                Hex Code:
                <br />
                #c5e1a5
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-lightgreen-200)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-lightgreen-200)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-lightgreen-300:
                <br />
                Hex Code:
                <br />
                #aed581
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-lightgreen-300)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-lightgreen-300)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-lightgreen-400:
                <br />
                Hex Code:
                <br />
                #9ccc65
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-lightgreen-400)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-lightgreen-400)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-lightgreen-500:
                <br />
                Hex Code:
                <br />
                #8bc34a
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-lightgreen-500)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-lightgreen-500)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-lightgreen-600:
                <br />
                Hex Code:
                <br />
                #7cb342
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-lightgreen-600)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-lightgreen-600)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-lightgreen-700:
                <br />
                Hex Code:
                <br />
                #689f38
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-lightgreen-700)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-lightgreen-700)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-lightgreen-800:
                <br />
                Hex Code:
                <br />
                #558b2f
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-lightgreen-800)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-lightgreen-800)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-lightgreen-900:
                <br />
                Hex Code:
                <br />
                #33691e
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-lightgreen-900)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-lightgreen-900)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-lightgreen-A100:
                <br />
                Hex Code:
                <br />
                #ccff90
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-lightgreen-A100)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-lightgreen-A100)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-lightgreen-A200:
                <br />
                Hex Code:
                <br />
                #b2ff59
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-lightgreen-A200)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-lightgreen-A200)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-lightgreen-A400:
                <br />
                Hex Code:
                <br />
                #76ff03
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-lightgreen-A400)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-lightgreen-A400)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-lightgreen-A700:
                <br />
                Hex Code:
                <br />
                #64dd17
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-lightgreen-A700)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-lightgreen-A700)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-lime-50:
                <br />
                Hex Code:
                <br />
                #f9fbe7
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-lime-50)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-lime-50)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-lime-100:
                <br />
                Hex Code:
                <br />
                #f0f4c3
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-lime-100)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-lime-100)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-lime-200:
                <br />
                Hex Code:
                <br />
                #e6ee9c
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-lime-200)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-lime-200)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-lime-300:
                <br />
                Hex Code:
                <br />
                #dce775
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-lime-300)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-lime-300)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-lime-400:
                <br />
                Hex Code:
                <br />
                #d4e157
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-lime-400)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-lime-400)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-lime-500:
                <br />
                Hex Code:
                <br />
                #cddc39
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-lime-500)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-lime-500)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-lime-600:
                <br />
                Hex Code:
                <br />
                #c0ca33
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-lime-600)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-lime-600)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-lime-700:
                <br />
                Hex Code:
                <br />
                #afb42b
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-lime-700)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-lime-700)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-lime-800:
                <br />
                Hex Code:
                <br />
                #9e9d24
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-lime-800)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-lime-800)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-lime-900:
                <br />
                Hex Code:
                <br />
                #827717
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-lime-900)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-lime-900)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-lime-A100:
                <br />
                Hex Code:
                <br />
                #f4ff81
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-lime-A100)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-lime-A100)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-lime-A200:
                <br />
                Hex Code:
                <br />
                #eeff41
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-lime-A200)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-lime-A200)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-lime-A400:
                <br />
                Hex Code:
                <br />
                #c6ff00
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-lime-A400)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-lime-A400)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-lime-A700:
                <br />
                Hex Code:
                <br />
                #aeea00
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-lime-A700)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-lime-A700)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-yellow-50:
                <br />
                Hex Code:
                <br />
                #fffde7
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-yellow-50)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-yellow-50)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-yellow-100:
                <br />
                Hex Code:
                <br />
                #fff9c4
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-yellow-100)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-yellow-100)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-yellow-200:
                <br />
                Hex Code:
                <br />
                #fff59d
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-yellow-200)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-yellow-200)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-yellow-300:
                <br />
                Hex Code:
                <br />
                #fff176
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-yellow-300)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-yellow-300)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-yellow-400:
                <br />
                Hex Code:
                <br />
                #ffee58
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-yellow-400)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-yellow-400)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-yellow-500:
                <br />
                Hex Code:
                <br />
                #ffeb3b
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-yellow-500)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-yellow-500)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-yellow-600:
                <br />
                Hex Code:
                <br />
                #fdd835
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-yellow-600)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-yellow-600)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-yellow-700:
                <br />
                Hex Code:
                <br />
                #fbc02d
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-yellow-700)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-yellow-700)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-yellow-800:
                <br />
                Hex Code:
                <br />
                #f9a825
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-yellow-800)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-yellow-800)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-yellow-900:
                <br />
                Hex Code:
                <br />
                #f57f17
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-yellow-900)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-yellow-900)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-yellow-A100:
                <br />
                Hex Code:
                <br />
                #ffff8d
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-yellow-A100)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-yellow-A100)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-yellow-A200:
                <br />
                Hex Code:
                <br />
                #ffff00
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-yellow-A200)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-yellow-A200)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-yellow-A400:
                <br />
                Hex Code:
                <br />
                #ffea00
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-yellow-A400)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-yellow-A400)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-yellow-A700:
                <br />
                Hex Code:
                <br />
                #ffd600
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-yellow-A700)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-yellow-A700)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-amber-50:
                <br />
                Hex Code:
                <br />
                #fff8e1
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-amber-50)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-amber-50)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-amber-100:
                <br />
                Hex Code:
                <br />
                #ffecb3
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-amber-100)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-amber-100)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-amber-200:
                <br />
                Hex Code:
                <br />
                #ffe082
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-amber-200)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-amber-200)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-amber-300:
                <br />
                Hex Code:
                <br />
                #ffd54f
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-amber-300)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-amber-300)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-amber-400:
                <br />
                Hex Code:
                <br />
                #ffca28
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-amber-400)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-amber-400)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-amber-500:
                <br />
                Hex Code:
                <br />
                #ffc107
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-amber-500)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-amber-500)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-amber-600:
                <br />
                Hex Code:
                <br />
                #ffb300
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-amber-600)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-amber-600)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-amber-700:
                <br />
                Hex Code:
                <br />
                #ffa000
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-amber-700)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-amber-700)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-amber-800:
                <br />
                Hex Code:
                <br />
                #ff8f00
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-amber-800)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-amber-800)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-amber-900:
                <br />
                Hex Code:
                <br />
                #ff6f00
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-amber-900)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-amber-900)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-amber-A100:
                <br />
                Hex Code:
                <br />
                #ffe57f
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-amber-A100)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-amber-A100)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-amber-A200:
                <br />
                Hex Code:
                <br />
                #ffd740
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-amber-A200)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-amber-A200)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-amber-A400:
                <br />
                Hex Code:
                <br />
                #ffc400
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-amber-A400)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-amber-A400)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-amber-A700:
                <br />
                Hex Code:
                <br />
                #ffab00
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-amber-A700)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-amber-A700)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-orange-50:
                <br />
                Hex Code:
                <br />
                #fff3e0
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-orange-50)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-orange-50)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-orange-100:
                <br />
                Hex Code:
                <br />
                #ffe0b2
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-orange-100)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-orange-100)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-orange-200:
                <br />
                Hex Code:
                <br />
                #ffcc80
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-orange-200)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-orange-200)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-orange-300:
                <br />
                Hex Code:
                <br />
                #ffb74d
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-orange-300)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-orange-300)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-orange-400:
                <br />
                Hex Code:
                <br />
                #ffa726
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-orange-400)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-orange-400)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-orange-500:
                <br />
                Hex Code:
                <br />
                #ff9800
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-orange-500)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-orange-500)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-orange-600:
                <br />
                Hex Code:
                <br />
                #fb8c00
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-orange-600)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-orange-600)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-orange-700:
                <br />
                Hex Code:
                <br />
                #f57c00
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-orange-700)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-orange-700)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-orange-800:
                <br />
                Hex Code:
                <br />
                #ef6c00
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-orange-800)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-orange-800)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-orange-900:
                <br />
                Hex Code:
                <br />
                #e65100
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-orange-900)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-orange-900)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-orange-A100:
                <br />
                Hex Code:
                <br />
                #ffd180
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-orange-A100)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-orange-A100)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-orange-A200:
                <br />
                Hex Code:
                <br />
                #ffab40
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-orange-A200)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-orange-A200)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-orange-A400:
                <br />
                Hex Code:
                <br />
                #ff9100
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-orange-A400)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-orange-A400)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-orange-A700:
                <br />
                Hex Code:
                <br />
                #ff6d00
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-orange-A700)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-orange-A700)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-deeporange-50:
                <br />
                Hex Code:
                <br />
                #fbe9e7
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-deeporange-50)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-deeporange-50)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-deeporange-100:
                <br />
                Hex Code:
                <br />
                #ffccbc
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-deeporange-100)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-deeporange-100)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-deeporange-200:
                <br />
                Hex Code:
                <br />
                #ffab91
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-deeporange-200)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-deeporange-200)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-deeporange-300:
                <br />
                Hex Code:
                <br />
                #ff8a65
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-deeporange-300)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-deeporange-300)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-deeporange-400:
                <br />
                Hex Code:
                <br />
                #ff7043
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-deeporange-400)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-deeporange-400)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-deeporange-500:
                <br />
                Hex Code:
                <br />
                #ff5722
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-deeporange-500)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-deeporange-500)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-deeporange-600:
                <br />
                Hex Code:
                <br />
                #f4511e
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-deeporange-600)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-deeporange-600)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-deeporange-700:
                <br />
                Hex Code:
                <br />
                #e64a19
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-deeporange-700)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-deeporange-700)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-deeporange-800:
                <br />
                Hex Code:
                <br />
                #d84315
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-deeporange-800)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-deeporange-800)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-deeporange-900:
                <br />
                Hex Code:
                <br />
                #bf360c
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-deeporange-900)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-deeporange-900)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-deeporange-A100:
                <br />
                Hex Code:
                <br />
                #ff9e80
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-deeporange-A100)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-deeporange-A100)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-deeporange-A200:
                <br />
                Hex Code:
                <br />
                #ff6e40
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-deeporange-A200)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-deeporange-A200)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-deeporange-A400:
                <br />
                Hex Code:
                <br />
                #ff3d00
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-deeporange-A400)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-deeporange-A400)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-deeporange-A700:
                <br />
                Hex Code:
                <br />
                #dd2c00
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-deeporange-A700)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-deeporange-A700)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-brown-50:
                <br />
                Hex Code:
                <br />
                #efebe9
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-brown-50)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-brown-50)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-brown-100:
                <br />
                Hex Code:
                <br />
                #d7ccc8
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-brown-100)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-brown-100)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-brown-200:
                <br />
                Hex Code:
                <br />
                #bcaaa4
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-brown-200)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-brown-200)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-brown-300:
                <br />
                Hex Code:
                <br />
                #a1887f
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-brown-300)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-brown-300)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-brown-400:
                <br />
                Hex Code:
                <br />
                #8d6e63
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-brown-400)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-brown-400)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-brown-500:
                <br />
                Hex Code:
                <br />
                #795548
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-brown-500)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-brown-500)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-brown-600:
                <br />
                Hex Code:
                <br />
                #6d4c41
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-brown-600)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-brown-600)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-brown-700:
                <br />
                Hex Code:
                <br />
                #5d4037
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-brown-700)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-brown-700)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-brown-800:
                <br />
                Hex Code:
                <br />
                #4e342e
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-brown-800)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-brown-800)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-brown-900:
                <br />
                Hex Code:
                <br />
                #3e2723
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-brown-900)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-brown-900)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-gray-50:
                <br />
                Hex Code:
                <br />
                #fafafa
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-gray-50)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-gray-50)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-gray-100:
                <br />
                Hex Code:
                <br />
                #f5f5f5
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-gray-100)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-gray-100)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-gray-200:
                <br />
                Hex Code:
                <br />
                #eeeeee
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-gray-200)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-gray-200)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-gray-300:
                <br />
                Hex Code:
                <br />
                #e0e0e0
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-gray-300)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-gray-300)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-gray-400:
                <br />
                Hex Code:
                <br />
                #bdbdbd
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-gray-400)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-gray-400)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-gray-500:
                <br />
                Hex Code:
                <br />
                #9e9e9e
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-gray-500)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-gray-500)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-gray-600:
                <br />
                Hex Code:
                <br />
                #757575
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-gray-600)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-gray-600)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-gray-700:
                <br />
                Hex Code:
                <br />
                #616161
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-gray-700)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-gray-700)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-gray-800:
                <br />
                Hex Code:
                <br />
                #424242
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-gray-800)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-gray-800)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-gray-900:
                <br />
                Hex Code:
                <br />
                #212121
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-gray-900)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-gray-900)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-bluegray-50:
                <br />
                Hex Code:
                <br />
                #eceff1
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-bluegray-50)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-bluegray-50)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-bluegray-100:
                <br />
                Hex Code:
                <br />
                #cfd8dc
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-bluegray-100)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-bluegray-100)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-bluegray-200:
                <br />
                Hex Code:
                <br />
                #b0bec5
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-bluegray-200)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-bluegray-200)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-bluegray-300:
                <br />
                Hex Code:
                <br />
                #90a4ae
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-bluegray-300)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-bluegray-300)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-bluegray-400:
                <br />
                Hex Code:
                <br />
                #78909c
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-bluegray-400)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-bluegray-400)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-bluegray-500:
                <br />
                Hex Code:
                <br />
                #607d8b
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-bluegray-500)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-bluegray-500)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-bluegray-600:
                <br />
                Hex Code:
                <br />
                #546e7a
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-bluegray-600)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-bluegray-600)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-bluegray-700:
                <br />
                Hex Code:
                <br />
                #455a64
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-bluegray-700)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-bluegray-700)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-bluegray-800:
                <br />
                Hex Code:
                <br />
                #37474f
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-bluegray-800)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-bluegray-800)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-bluegray-900:
                <br />
                Hex Code:
                <br />
                #263238
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-bluegray-900)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-bluegray-900)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-black: <br /> HexCode: <br />
                #000000
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-black)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-black)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-white: <br /> HexCode: <br />
                #ffffff
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-white)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-white)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-transparent <br /> HexCode: rga(0, 0, 0, 0)
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-transparent)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-transparent)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-transparent-05 <br /> HexCode:
                <br />
                rgba(0, 0, 0, 0.05)
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-transparent-05"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-transparent-05)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-transparent-33 <br /> HexCode:
                <br />
                rgba(, 0, 0, 0.3)
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-transparent-33"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-transparent-33)',
                }}
              ></button>
            </div>
            <div>
              <p style={{ fontSize: '12px' }}>
                Variable:
                <br />
                --color-red-transparent-33
                <br />
                HexCode: <br />
                rgba(255, 0, 0, 0.3)
              </p>
              <button
                className="sample"
                onClick={handleColorPick}
                data-color="var(--color-red-transparent-33)"
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: 'var(--color-red-transparent-33)',
                }}
              ></button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
