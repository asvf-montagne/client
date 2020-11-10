import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { useDropzone } from 'react-dropzone';
import Input from '@components/atoms/Input';
import Icon from '@material-ui/core/Icon';
import { FieldArray } from 'react-final-form-arrays';
import { Field } from 'react-final-form';
import styles from './UploadImageInput.module.css';

UploadImageInput.propTypes = {
  push: PropTypes.func.isRequired,
};

/**
 * How to use:
 *
 * In your <Form> component add:
 *   mutators={{
 *        ...arrayMutators
 *      }}
 *
 * Then in your Form component destructuring for the render property keep the 'form' field.
 *
 * When you instantiate UploadImageInput, pass form.mutators.push.
 * For validating input you will see a 'files' key.
 *
 * @param push from final-form-arrays
 * @returns {JSX.Element}
 * @constructor
 */
export default function UploadImageInput({ push }) {
  const [files, setFiles] = useState([]);

  const fileId = (f) => {
    return `${f.path}${f.size}${f.lastModified}`;
  };

  const isFileEqual = (f1, f2) => {
    return fileId(f1) === fileId(f2);
  };

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    accept: 'image/*',
    onDropAccepted: (acceptedFiles) => {
      setFiles([
        ...files,
        ...acceptedFiles.reduce((list, file) => {
          // if the file is already present, don't add it
          if (files.some((f) => isFileEqual(f, file))) return list;

          // add to the file the preview (a blob object)
          const fileWithPreview = Object.assign(file, {
            preview: URL.createObjectURL(file),
          });

          // add an entry to the form list and add the file to the list of additional data for the upper form
          push('files', fileWithPreview);

          return [...list, fileWithPreview];
        }, []),
      ]);
    },
  });

  const style = useMemo(() => {
    if (isDragReject) return 'reject';
    if (isDragAccept) return 'accept';
    if (isDragActive) return 'active';
  }, [isDragActive, isDragReject, isDragAccept]);

  const deleteFile = (f) => {
    setFiles(files.filter((file) => file.preview !== f.preview));
  };

  return (
    <section className="container">
      <div
        {...getRootProps({
          className: `
      ${styles.upload_file} 
      ${styles['upload_file__' + style]}
      `,
        })}
      >
        <input {...getInputProps()} />
        <div className={styles.upload_file__textComponent}>
          <p>
            Faites glisser vos fichiers ici ou bien <em>cherchez les</em>
          </p>
        </div>
      </div>
      <div>
        <p className={styles.img_preview__title}>
          {files.length > 0
            ? `Fichier${files.length > 1 ? 's' : ''} (${files.length})`
            : `Aucune image ajouté pour l'instant`}
        </p>

        <div className={styles.img_preview__container}>
          <FieldArray name="files">
            {({ fields }) =>
              fields.map((name, index) => {
                const f = files[index];

                if (f === undefined) {
                  return <div key={index} />;
                }

                return (
                  <div className={styles.img_preview__imagePreview} key={index}>
                    <img
                      alt="hello"
                      className={styles.img_preview__img}
                      src={f.preview}
                    />
                    <div className={styles.img_preview__containedInputAndIcon}>
                      <div className={styles.img_preview__input}>
                        <Field name={`files.${index}.caption`} type="text">
                          {({ input, meta }) => (
                            <Input
                              label="Légende"
                              placeholder="Des jolies montagnes ..."
                              icon="text_format"
                              {...input}
                              onKeyDown={() => {}}
                              meta={meta}
                            />
                          )}
                        </Field>
                      </div>
                      <Icon
                        className={styles.img_preview__contained_del}
                        onClick={() => {
                          fields.remove(index);
                          deleteFile(f);
                        }}
                      >
                        delete
                      </Icon>
                    </div>
                  </div>
                );
              })
            }
          </FieldArray>
        </div>
      </div>
    </section>
  );
}
