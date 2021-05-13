export interface Stream {
  index: number;
  codec_name: string;
  codec_long_name: string;
  codec_type: string;
  start_pts: number;
  start_time: string;
  r_frame_rate: string;
  avg_frame_rate: string;
  disposition: any;
}

export interface VideoStream extends Stream {
  width: number;
  height: number;
  coded_width: number;
  coded_height: number;
  closed_captions: number;
  /** 像素格式 */
  pix_fmt: string;
  level: number;
  has_b_frames: number;
  is_avc: string;
  bits_per_raw_sample: string;
}

export interface AudioStream extends Stream {
  sample_fmt: string;
  sample_rate: string;
  channels: number;
  channel_layout: string;
  bits_per_sample: number;
}