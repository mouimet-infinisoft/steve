/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */

import { Avatar } from "@mui/material";
import React, { Suspense } from "react";
import { defaultAvatar } from "./assets";
import css from './index.module.css';
import CloudUploadTwoToneIcon from '@mui/icons-material/CloudUploadTwoTone';

const _defaultConfig = {
  src: defaultAvatar
};

const AvatarUpload = ({ src = _defaultConfig.src, save }) => {
  const onChange = (e) => {
    const file = new FileReader();
    if (e.target?.files?.[0]) {
      file.readAsDataURL(e.target.files[0]);
      file.addEventListener("load", (e) => {
        const imageUrl = e.target?.result;
        if (imageUrl) {
          save?.(imageUrl);
        }
      });
    }
  };

  return (
    <Suspense>
      <fieldset style={{ border: 0 }} className={css.detailCardAvatar}>
        <label htmlFor="avatar">
          <input
            type="file"
            onChange={onChange}
            id="avatar"
            style={{ display: "none" }}
          />
          <div className={css.detailCardAvatarUpload}><CloudUploadTwoToneIcon sx={{ width: 92, height: 92 }}/></div>
          <Avatar src={src} sx={{ width: 92, height: 92 }} alt="avatar"  />
        </label>
      </fieldset>
    </Suspense>
  );
};

export default AvatarUpload;
